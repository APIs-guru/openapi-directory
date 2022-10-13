from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parameter
from . import parameter
from . import parameter
from . import parameter

class VariableFormatValueCaseConversionTypeEnum(str, Enum):
    NONE = "none"
    LOWERCASE = "lowercase"
    UPPERCASE = "uppercase"


@dataclass_json
@dataclass
class VariableFormatValue:
    case_conversion_type: Optional[VariableFormatValueCaseConversionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseConversionType' }})
    convert_false_to_value: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertFalseToValue' }})
    convert_null_to_value: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertNullToValue' }})
    convert_true_to_value: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertTrueToValue' }})
    convert_undefined_to_value: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertUndefinedToValue' }})
    
