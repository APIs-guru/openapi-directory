from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReauthSettingsMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    LOGIN = "LOGIN"
    SECURE_KEY = "SECURE_KEY"
    ENROLLED_SECOND_FACTORS = "ENROLLED_SECOND_FACTORS"

class ReauthSettingsPolicyTypeEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    MINIMUM = "MINIMUM"
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclass
class ReauthSettings:
    r"""ReauthSettings
    Configuration for IAP reauthentication policies.
    """
    
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAge') }})
    method: Optional[ReauthSettingsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    policy_type: Optional[ReauthSettingsPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyType') }})
    
