from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namedproperty


@dataclass_json
@dataclass
class StructuredDataObject:
    properties: Optional[List[namedproperty.NamedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
