from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import generalcommandtype_enum


@dataclass_json
@dataclass
class GeneralCommand:
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    controlling_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControllingUserId' }})
    name: Optional[generalcommandtype_enum.GeneralCommandTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
