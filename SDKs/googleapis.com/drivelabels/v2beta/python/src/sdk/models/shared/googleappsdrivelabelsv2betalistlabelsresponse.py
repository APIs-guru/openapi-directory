from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaListLabelsResponse:
    r"""GoogleAppsDriveLabelsV2betaListLabelsResponse
    Response for listing Labels.
    """
    
    labels: Optional[List[GoogleAppsDriveLabelsV2betaLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
