from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDomainRecordPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    
class CreateDomainRecordRequestBodyTagEnum(str, Enum):
    ISSUE = "issue"
    ISSUEWILD = "issuewild"
    IODEF = "iodef"

class CreateDomainRecordRequestBodyTypeEnum(str, Enum):
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
class CreateDomainRecordRequestBody:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    tag: Optional[CreateDomainRecordRequestBodyTagEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl_sec' }})
    type: CreateDomainRecordRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass
class CreateDomainRecordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateDomainRecordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDomainRecordSecurity:
    option1: Optional[CreateDomainRecordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateDomainRecordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateDomainRecordRequest:
    path_params: CreateDomainRecordPathParams = field(default=None)
    request: CreateDomainRecordRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDomainRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateDomainRecordResponse:
    content_type: str = field(default=None)
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    status_code: int = field(default=None)
    create_domain_record_default_application_json_object: Optional[CreateDomainRecordDefaultApplicationJSON] = field(default=None)
    
