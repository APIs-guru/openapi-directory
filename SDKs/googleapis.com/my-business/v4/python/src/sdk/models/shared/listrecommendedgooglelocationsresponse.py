from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRecommendedGoogleLocationsResponse:
    r"""ListRecommendedGoogleLocationsResponse
    Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
    """
    
    google_locations: Optional[List[GoogleLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleLocations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
