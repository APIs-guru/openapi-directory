from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest:
    policy_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyNamespace' }})
    policy_target_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
