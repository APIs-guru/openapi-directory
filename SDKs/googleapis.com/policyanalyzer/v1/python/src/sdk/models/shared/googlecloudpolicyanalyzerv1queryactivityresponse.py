from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicyanalyzerV1QueryActivityResponse:
    r"""GoogleCloudPolicyanalyzerV1QueryActivityResponse
    Response to the `QueryActivity` method.
    """
    
    activities: Optional[List[GoogleCloudPolicyanalyzerV1Activity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
