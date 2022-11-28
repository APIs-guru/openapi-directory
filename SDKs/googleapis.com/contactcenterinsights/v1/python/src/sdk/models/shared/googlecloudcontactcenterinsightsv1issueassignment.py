from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueAssignment:
    r"""GoogleCloudContactcenterinsightsV1IssueAssignment
    Information about the issue.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
