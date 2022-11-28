from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DomainRecord
    A single record on a Domain.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    tag: Optional[DomainRecordTagEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl_sec') }})
    type: Optional[DomainRecordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    

@dataclass_json
@dataclass
class DomainRecordInput:
    r"""DomainRecordInput
    A single record on a Domain.
    
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    tag: Optional[DomainRecordTagEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl_sec') }})
    type: Optional[DomainRecordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
