from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import textspan

class EntityMentionTypeEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclass
class EntityMention:
    text: Optional[textspan.TextSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[EntityMentionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
