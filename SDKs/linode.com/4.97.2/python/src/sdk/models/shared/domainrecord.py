from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainRecordTagEnum(str, Enum):
    ISSUE = "issue"
    ISSUEWILD = "issuewild"
    IODEF = "iodef"

class DomainRecordTypeEnum(str, Enum):
    A = "A"
    AAAA = "AAAA"
    NS = "NS"
    MX = "MX"
    CNAME = "CNAME"
    TXT = "TXT"
    SRV = "SRV"
    PTR = "PTR"
    CAA = "CAA"


@dataclass_json
@dataclass
class DomainRecord:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    tag: Optional[DomainRecordTagEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl_sec' }})
    type: Optional[DomainRecordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
