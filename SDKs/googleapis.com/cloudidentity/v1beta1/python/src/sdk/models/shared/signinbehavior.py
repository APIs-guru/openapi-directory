from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SignInBehaviorRedirectConditionEnum(str, Enum):
    REDIRECT_CONDITION_UNSPECIFIED = "REDIRECT_CONDITION_UNSPECIFIED"
    NEVER = "NEVER"


@dataclass_json
@dataclass
class SignInBehavior:
    redirect_condition: Optional[SignInBehaviorRedirectConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectCondition' }})
    
