from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoparametervaluetype


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParameterEntry:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[enterprisecrmeventbusprotoparametervaluetype.EnterpriseCrmEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
