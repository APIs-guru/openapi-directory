from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelResult:
    r"""GoogleCloudContactcenterinsightsV1IssueModelResult
    Issue Modeling result on a conversation.
    """
    
    issue_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModel') }})
    issues: Optional[List[GoogleCloudContactcenterinsightsV1IssueAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
