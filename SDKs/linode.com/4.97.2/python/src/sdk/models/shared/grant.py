from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GrantPermissionsEnum(str, Enum):
    READ_ONLY = "read_only"
    READ_WRITE = "read_write"


@dataclass_json
@dataclass
class Grant:
    r"""Grant
    Represents the level of access a restricted User has to a specific resource on the Account.
    
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    permissions: Optional[GrantPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GrantInput:
    r"""GrantInput
    Represents the level of access a restricted User has to a specific resource on the Account.
    
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    permissions: Optional[GrantPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
