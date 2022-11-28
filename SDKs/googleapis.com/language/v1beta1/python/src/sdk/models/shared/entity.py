from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Entity
    Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
    """
    
    mentions: Optional[List[EntityMention]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentions') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    salience: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salience') }})
    type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
