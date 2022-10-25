from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class WritableServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"


@dataclass_json
@dataclass
class WritableService:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ipaddresses: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipaddresses' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: WritableServiceProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtual_machine: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_machine' }})
    
