from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateDomainRequestBodyStatusEnum(str, Enum):
    DISABLED = "disabled"
    ACTIVE = "active"

class CreateDomainRequestBodyTypeEnum(str, Enum):
    MASTER = "master"
    SLAVE = "slave"


@dataclass_json
@dataclass
class CreateDomainRequestBody:
    axfr_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'axfr_ips' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    expire_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_sec' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    master_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master_ips' }})
    refresh_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_sec' }})
    retry_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retry_sec' }})
    soa_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soa_email' }})
    status: Optional[CreateDomainRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl_sec' }})
    type: CreateDomainRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateDomainSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateDomainSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDomainSecurity:
    option1: Optional[CreateDomainSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateDomainSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateDomainRequest:
    request: CreateDomainRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateDomainResponse:
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    create_domain_default_application_json_object: Optional[CreateDomainDefaultApplicationJSON] = field(default=None)
    
