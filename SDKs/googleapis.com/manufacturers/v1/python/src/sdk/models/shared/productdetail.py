from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductDetail:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeValue' }})
    section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionName' }})
    
