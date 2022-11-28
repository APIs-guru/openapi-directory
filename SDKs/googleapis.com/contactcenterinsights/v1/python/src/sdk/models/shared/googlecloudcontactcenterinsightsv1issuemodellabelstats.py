from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelLabelStats:
    r"""GoogleCloudContactcenterinsightsV1IssueModelLabelStats
    Aggregated statistics about an issue model.
    """
    
    analyzed_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzedConversationsCount') }})
    issue_stats: Optional[dict[str, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueStats') }})
    unclassified_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiedConversationsCount') }})
    
