from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectoptions
from . import propertydefinition


@dataclass_json
@dataclass
class ObjectDefinition:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[objectoptions.ObjectOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    property_definitions: Optional[List[propertydefinition.PropertyDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyDefinitions' }})
    
