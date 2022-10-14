from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policytargetkey
from . import googlechromepolicyversionsv1policytargetkey
from . import googlechromepolicyversionsv1policytargetkey
from . import googlechromepolicyversionsv1policyvalue


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ResolvedPolicy:
    added_source_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedSourceKey' }})
    source_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceKey' }})
    target_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetKey' }})
    value: Optional[googlechromepolicyversionsv1policyvalue.GoogleChromePolicyVersionsV1PolicyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
