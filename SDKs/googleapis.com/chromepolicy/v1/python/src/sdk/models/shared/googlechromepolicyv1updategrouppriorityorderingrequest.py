from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyV1UpdateGroupPriorityOrderingRequest:
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupIds' }})
    policy_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyNamespace' }})
    policy_target_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
