from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotovaluetype


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoPropertyEntry:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[enterprisecrmeventbusprotovaluetype.EnterpriseCrmEventbusProtoValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
