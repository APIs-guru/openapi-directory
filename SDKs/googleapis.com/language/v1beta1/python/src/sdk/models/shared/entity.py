from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitymention

class EntityTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    EVENT = "EVENT"
    WORK_OF_ART = "WORK_OF_ART"
    CONSUMER_GOOD = "CONSUMER_GOOD"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class Entity:
    mentions: Optional[List[entitymention.EntityMention]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentions' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    salience: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salience' }})
    type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
