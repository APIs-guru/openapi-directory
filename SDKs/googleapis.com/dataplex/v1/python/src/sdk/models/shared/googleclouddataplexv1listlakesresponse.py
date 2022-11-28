from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListLakesResponse:
    r"""GoogleCloudDataplexV1ListLakesResponse
    List lakes response.
    """
    
    lakes: Optional[List[GoogleCloudDataplexV1Lake]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lakes') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachableLocations') }})
    
