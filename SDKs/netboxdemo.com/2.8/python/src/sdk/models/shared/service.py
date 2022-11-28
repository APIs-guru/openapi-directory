from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServiceProtocolLabelEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

class ServiceProtocolValueEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"


@dataclass_json
@dataclass
class ServiceProtocol:
    label: ServiceProtocolLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: ServiceProtocolValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Service:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device: Optional[NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ipaddresses: Optional[List[NestedIPAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipaddresses') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    protocol: Optional[ServiceProtocol] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtual_machine: Optional[NestedVirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    
