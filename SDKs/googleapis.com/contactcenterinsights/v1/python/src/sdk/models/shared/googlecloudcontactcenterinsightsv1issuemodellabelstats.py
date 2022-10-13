from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelLabelStats:
    analyzed_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzedConversationsCount' }})
    issue_stats: Optional[dict[str, googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueStats' }})
    unclassified_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiedConversationsCount' }})
    
