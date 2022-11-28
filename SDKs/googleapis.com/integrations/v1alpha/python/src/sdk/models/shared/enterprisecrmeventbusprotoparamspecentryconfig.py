from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    STRING_MULTI_LINE = "STRING_MULTI_LINE"
    NUMBER_SLIDER = "NUMBER_SLIDER"
    BOOLEAN_TOGGLE = "BOOLEAN_TOGGLE"

class EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum(str, Enum):
    DEFAULT_NOT_PARAMETER_NAME = "DEFAULT_NOT_PARAMETER_NAME"
    IS_PARAMETER_NAME = "IS_PARAMETER_NAME"
    KEY_IS_PARAMETER_NAME = "KEY_IS_PARAMETER_NAME"
    VALUE_IS_PARAMETER_NAME = "VALUE_IS_PARAMETER_NAME"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryConfig:
    descriptive_phrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptivePhrase') }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpText') }})
    hide_default_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideDefaultValue') }})
    input_display_option: Optional[EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDisplayOption') }})
    is_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHidden') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    parameter_name_option: Optional[EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterNameOption') }})
    sub_section_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subSectionLabel') }})
    ui_placeholder_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uiPlaceholderText') }})
    
