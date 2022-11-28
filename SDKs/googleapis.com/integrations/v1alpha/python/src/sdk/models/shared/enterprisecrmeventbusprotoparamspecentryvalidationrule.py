from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRule:
    double_range: Optional[EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleRange') }})
    int_range: Optional[EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intRange') }})
    string_regex: Optional[EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringRegex') }})
    
