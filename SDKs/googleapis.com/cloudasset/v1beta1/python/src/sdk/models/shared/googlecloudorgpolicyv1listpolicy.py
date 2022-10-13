from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum(str, Enum):
    ALL_VALUES_UNSPECIFIED = "ALL_VALUES_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV1ListPolicy:
    all_values: Optional[GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allValues' }})
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    denied_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniedValues' }})
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritFromParent' }})
    suggested_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedValue' }})
    
