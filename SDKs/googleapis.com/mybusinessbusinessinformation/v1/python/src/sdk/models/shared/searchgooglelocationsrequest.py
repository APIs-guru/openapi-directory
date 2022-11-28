from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchGoogleLocationsRequestInput:
    r"""SearchGoogleLocationsRequestInput
    Request message for GoogleLocations.SearchGoogleLocations.
    """
    
    location: Optional[LocationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
