from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    labeled_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labeledConversationsCount' }})
    
