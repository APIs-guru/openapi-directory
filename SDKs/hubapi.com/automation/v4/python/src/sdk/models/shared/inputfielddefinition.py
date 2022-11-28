from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InputFieldDefinitionSupportedValueTypesEnum(str, Enum):
    STATIC_VALUE = "STATIC_VALUE"
    OBJECT_PROPERTY = "OBJECT_PROPERTY"
    FIELD_DATA = "FIELD_DATA"


@dataclass_json
@dataclass
class InputFieldDefinition:
    r"""InputFieldDefinition
    Configuration for an input field on the custom action
    """
    
    is_required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    type_definition: FieldTypeDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeDefinition') }})
    supported_value_types: Optional[List[InputFieldDefinitionSupportedValueTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedValueTypes') }})
    
