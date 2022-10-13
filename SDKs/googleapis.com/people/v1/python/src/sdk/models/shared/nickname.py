from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata

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
class Nickname:
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    type: Optional[NicknameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
