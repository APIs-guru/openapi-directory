from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReturnPolicyOnlinePolicyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NUMBER_OF_DAYS_AFTER_DELIVERY = "NUMBER_OF_DAYS_AFTER_DELIVERY"
    NO_RETURNS = "NO_RETURNS"
    LIFETIME_RETURNS = "LIFETIME_RETURNS"


@dataclass_json
@dataclass
class ReturnPolicyOnlinePolicy:
    days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days' }})
    type: Optional[ReturnPolicyOnlinePolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
