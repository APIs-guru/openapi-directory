from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoparamspecentryvalidationruledoublerange
from . import enterprisecrmeventbusprotoparamspecentryvalidationruleintrange
from . import enterprisecrmeventbusprotoparamspecentryvalidationrulestringregex


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRule:
    double_range: Optional[enterprisecrmeventbusprotoparamspecentryvalidationruledoublerange.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleRange' }})
    int_range: Optional[enterprisecrmeventbusprotoparamspecentryvalidationruleintrange.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intRange' }})
    string_regex: Optional[enterprisecrmeventbusprotoparamspecentryvalidationrulestringregex.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringRegex' }})
    
