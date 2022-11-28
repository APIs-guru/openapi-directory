from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SignInBehaviorRedirectConditionEnum(str, Enum):
    REDIRECT_CONDITION_UNSPECIFIED = "REDIRECT_CONDITION_UNSPECIFIED"
    NEVER = "NEVER"


@dataclass_json
@dataclass
class SignInBehavior:
    r"""SignInBehavior
    Controls sign-in behavior.
    """
    
    redirect_condition: Optional[SignInBehaviorRedirectConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectCondition') }})
    
