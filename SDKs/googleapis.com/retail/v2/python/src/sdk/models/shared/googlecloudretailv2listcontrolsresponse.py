from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2ListControlsResponse:
    r"""GoogleCloudRetailV2ListControlsResponse
    Response for ListControls method.
    """
    
    controls: Optional[List[GoogleCloudRetailV2Control]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
