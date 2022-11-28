from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueMatchData:
    r"""GoogleCloudContactcenterinsightsV1IssueMatchData
    The data for an issue match annotation.
    """
    
    issue_assignment: Optional[GoogleCloudContactcenterinsightsV1IssueAssignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAssignment') }})
    
