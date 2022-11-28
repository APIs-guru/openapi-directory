from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDomainRecordPathParams:
    domain_id: int = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    
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
class CreateDomainRecordRequestBodyInput:
    type: CreateDomainRecordRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    tag: Optional[CreateDomainRecordRequestBodyTagEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl_sec') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    

@dataclass
class CreateDomainRecordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateDomainRecordRequest:
    path_params: CreateDomainRecordPathParams = field()
    request: CreateDomainRecordRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDomainRecordSecurity = field()
    

@dataclass
class CreateDomainRecordResponse:
    content_type: str = field()
    status_code: int = field()
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    create_domain_record_default_application_json_object: Optional[CreateDomainRecordDefaultApplicationJSON] = field(default=None)
    
