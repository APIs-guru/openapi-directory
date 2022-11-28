from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListLocationsResponse:
    locations: Optional[List[GoogleCloudMlV1Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
