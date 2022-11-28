from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Entity:
    r"""Entity
    A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
    """
    
    key: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    properties: Optional[dict[str, Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
