from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitymention
from . import sentiment

class EntityTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    EVENT = "EVENT"
    WORK_OF_ART = "WORK_OF_ART"
    CONSUMER_GOOD = "CONSUMER_GOOD"
    OTHER = "OTHER"
    PHONE_NUMBER = "PHONE_NUMBER"
    ADDRESS = "ADDRESS"
    DATE = "DATE"
    NUMBER = "NUMBER"
    PRICE = "PRICE"


@dataclass_json
@dataclass
class Entity:
    mentions: Optional[List[entitymention.EntityMention]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentions' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    salience: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salience' }})
    sentiment: Optional[sentiment.Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
