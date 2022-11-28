from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttributeDefinitionCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    REQUEST = "REQUEST"


@dataclass_json
@dataclass
class AttributeDefinition:
    r"""AttributeDefinition
    A client-defined consent attribute.
    """
    
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    category: Optional[AttributeDefinitionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    consent_default_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDefaultValues') }})
    data_mapping_default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataMappingDefaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
