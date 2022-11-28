from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NicknameTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    MAIDEN_NAME = "MAIDEN_NAME"
    INITIALS = "INITIALS"
    GPLUS = "GPLUS"
    OTHER_NAME = "OTHER_NAME"
    ALTERNATE_NAME = "ALTERNATE_NAME"
    SHORT_NAME = "SHORT_NAME"


@dataclass_json
@dataclass
class NicknameInput:
    r"""NicknameInput
    A person's nickname.
    """
    
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[NicknameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Nickname:
    r"""Nickname
    A person's nickname.
    """
    
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[NicknameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
