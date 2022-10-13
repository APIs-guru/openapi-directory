from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1policytargetkey
from . import googlechromepolicyv1policytargetkey
from . import googlechromepolicyv1policytargetkey
from . import googlechromepolicyv1policyvalue


@dataclass_json
@dataclass
class GoogleChromePolicyV1ResolvedPolicy:
    added_source_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedSourceKey' }})
    source_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceKey' }})
    target_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetKey' }})
    value: Optional[googlechromepolicyv1policyvalue.GoogleChromePolicyV1PolicyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
