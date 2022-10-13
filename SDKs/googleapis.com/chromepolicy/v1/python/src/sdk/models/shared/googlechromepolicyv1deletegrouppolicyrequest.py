from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyV1DeleteGroupPolicyRequest:
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchema' }})
    policy_target_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
