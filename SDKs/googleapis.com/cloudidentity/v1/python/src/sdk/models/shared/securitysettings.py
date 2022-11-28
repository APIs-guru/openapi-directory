from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecuritySettingsInput:
    r"""SecuritySettingsInput
    The definition of security settings.
    """
    
    member_restriction: Optional[MemberRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberRestriction') }})
    
