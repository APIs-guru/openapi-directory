from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityType:
    r"""EntityType
    EntityType message contains metadata information about a single entity type present in the external system.
    """
    
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
