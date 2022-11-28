from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListDlpJobsResponse:
    r"""GooglePrivacyDlpV2ListDlpJobsResponse
    The response message for listing DLP jobs.
    """
    
    jobs: Optional[List[GooglePrivacyDlpV2DlpJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
