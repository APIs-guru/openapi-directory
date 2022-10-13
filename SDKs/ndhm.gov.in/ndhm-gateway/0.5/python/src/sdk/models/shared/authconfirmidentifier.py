from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import authconfirmidentifiertype_enum


@dataclass_json
@dataclass
class AuthConfirmIdentifier:
    type: authconfirmidentifiertype_enum.AuthConfirmIdentifierTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
