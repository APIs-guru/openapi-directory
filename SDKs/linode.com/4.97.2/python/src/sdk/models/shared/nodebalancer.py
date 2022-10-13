from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeBalancerTransfer:
    in_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    out: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class NodeBalancer:
    client_conn_throttle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_conn_throttle' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    transfer: Optional[NodeBalancerTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
