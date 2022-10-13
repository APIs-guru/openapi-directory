from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromePolicyV1NetworkSetting:
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchema' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
