from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange:
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    
