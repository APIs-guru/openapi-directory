from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest:
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchema' }})
    policy_target_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
