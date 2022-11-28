from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Entity:
    r"""Entity
    'Entity row'/ 'Entity' refers to a single row of an entity type.
    """
    
    fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class EntityInput:
    r"""EntityInput
    'Entity row'/ 'Entity' refers to a single row of an entity type.
    """
    
    fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
