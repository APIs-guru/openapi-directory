from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fieldtypedefinition

class InputFieldDefinitionSupportedValueTypesEnum(str, Enum):
    STATIC_VALUE = "STATIC_VALUE"
    OBJECT_PROPERTY = "OBJECT_PROPERTY"
    FIELD_DATA = "FIELD_DATA"


@dataclass_json
@dataclass
class InputFieldDefinition:
    is_required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRequired' }})
    supported_value_types: Optional[List[InputFieldDefinitionSupportedValueTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedValueTypes' }})
    type_definition: fieldtypedefinition.FieldTypeDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeDefinition' }})
    
