from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicyTargetKey:
    additional_target_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalTargetKeys' }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResource' }})
    
