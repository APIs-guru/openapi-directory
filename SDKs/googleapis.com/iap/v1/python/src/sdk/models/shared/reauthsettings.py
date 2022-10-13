from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReauthSettingsMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    LOGIN = "LOGIN"
    SECURE_KEY = "SECURE_KEY"

class ReauthSettingsPolicyTypeEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    MINIMUM = "MINIMUM"
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclass
class ReauthSettings:
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAge' }})
    method: Optional[ReauthSettingsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    policy_type: Optional[ReauthSettingsPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyType' }})
    
