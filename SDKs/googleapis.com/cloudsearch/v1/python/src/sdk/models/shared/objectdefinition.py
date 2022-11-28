from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectDefinition:
    r"""ObjectDefinition
    The definition for an object within a data source.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[ObjectOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    property_definitions: Optional[List[PropertyDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyDefinitions') }})
    
