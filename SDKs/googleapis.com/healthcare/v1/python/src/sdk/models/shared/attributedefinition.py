from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AttributeDefinitionCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    REQUEST = "REQUEST"


@dataclass_json
@dataclass
class AttributeDefinition:
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    category: Optional[AttributeDefinitionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    consent_default_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentDefaultValues' }})
    data_mapping_default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataMappingDefaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
