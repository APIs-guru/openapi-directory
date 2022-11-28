from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListAnalysesResponse:
    r"""GoogleCloudContactcenterinsightsV1ListAnalysesResponse
    The response to list analyses.
    """
    
    analyses: Optional[List[GoogleCloudContactcenterinsightsV1Analysis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyses') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
