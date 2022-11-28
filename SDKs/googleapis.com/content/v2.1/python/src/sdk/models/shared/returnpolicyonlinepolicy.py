from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReturnPolicyOnlinePolicyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NUMBER_OF_DAYS_AFTER_DELIVERY = "NUMBER_OF_DAYS_AFTER_DELIVERY"
    NO_RETURNS = "NO_RETURNS"
    LIFETIME_RETURNS = "LIFETIME_RETURNS"


@dataclass_json
@dataclass
class ReturnPolicyOnlinePolicy:
    r"""ReturnPolicyOnlinePolicy
    The available policies.
    """
    
    days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    type: Optional[ReturnPolicyOnlinePolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
