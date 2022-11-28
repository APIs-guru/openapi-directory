from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats:
    r"""GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats
    Aggregated statistics about an issue.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    labeled_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labeledConversationsCount') }})
    
