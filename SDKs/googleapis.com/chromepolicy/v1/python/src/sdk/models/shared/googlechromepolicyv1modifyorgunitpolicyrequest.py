from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1policytargetkey
from . import googlechromepolicyv1policyvalue


@dataclass_json
@dataclass
class GoogleChromePolicyV1ModifyOrgUnitPolicyRequest:
    policy_target_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    policy_value: Optional[googlechromepolicyv1policyvalue.GoogleChromePolicyV1PolicyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyValue' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
