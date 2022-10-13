from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues:
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    denied_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniedValues' }})
    
