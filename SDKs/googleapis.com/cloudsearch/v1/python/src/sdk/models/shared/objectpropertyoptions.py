from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertydefinition


@dataclass_json
@dataclass
class ObjectPropertyOptions:
    subobject_properties: Optional[List[propertydefinition.PropertyDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subobjectProperties' }})
    
