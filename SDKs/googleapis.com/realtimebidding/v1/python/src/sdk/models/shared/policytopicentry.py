from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policytopicevidence


@dataclass_json
@dataclass
class PolicyTopicEntry:
    evidences: Optional[List[policytopicevidence.PolicyTopicEvidence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidences' }})
    help_center_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpCenterUrl' }})
    policy_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTopic' }})
    
