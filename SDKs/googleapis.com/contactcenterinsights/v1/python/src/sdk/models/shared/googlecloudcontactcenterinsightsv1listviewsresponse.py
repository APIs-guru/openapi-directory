from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListViewsResponse:
    r"""GoogleCloudContactcenterinsightsV1ListViewsResponse
    The response of listing views.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    views: Optional[List[GoogleCloudContactcenterinsightsV1View]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    
