from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    HUMAN = "HUMAN"
    BOT = "BOT"


@dataclass_json
@dataclass
class User:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainId' }})
    is_anonymous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAnonymous' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[UserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
