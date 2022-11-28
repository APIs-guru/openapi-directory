from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2ListLabelsResponse:
    r"""GoogleAppsDriveLabelsV2ListLabelsResponse
    Response for listing Labels.
    """
    
    labels: Optional[List[GoogleAppsDriveLabelsV2Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
