from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class Attributes:
    attribute_map: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeMap' }})
    dropped_attributes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedAttributesCount' }})
    
