from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VariableFormatValueCaseConversionTypeEnum(str, Enum):
    NONE = "none"
    LOWERCASE = "lowercase"
    UPPERCASE = "uppercase"


@dataclass_json
@dataclass
class VariableFormatValue:
    case_conversion_type: Optional[VariableFormatValueCaseConversionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseConversionType') }})
    convert_false_to_value: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertFalseToValue') }})
    convert_null_to_value: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertNullToValue') }})
    convert_true_to_value: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertTrueToValue') }})
    convert_undefined_to_value: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertUndefinedToValue') }})
    
