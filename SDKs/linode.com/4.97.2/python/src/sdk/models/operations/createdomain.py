from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateDomainRequestBodyStatusEnum(str, Enum):
    DISABLED = "disabled"
    ACTIVE = "active"

class CreateDomainRequestBodyTypeEnum(str, Enum):
    MASTER = "master"
    SLAVE = "slave"


@dataclass_json
@dataclass
class CreateDomainRequestBodyInput:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    type: CreateDomainRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    axfr_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('axfr_ips') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_sec') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    master_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_ips') }})
    refresh_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_sec') }})
    retry_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retry_sec') }})
    soa_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soa_email') }})
    status: Optional[CreateDomainRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl_sec') }})
    

@dataclass
class CreateDomainSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateDomainRequest:
    request: CreateDomainRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDomainSecurity = field()
    

@dataclass
class CreateDomainResponse:
    content_type: str = field()
    status_code: int = field()
    domain: Optional[shared.Domain] = field(default=None)
    create_domain_default_application_json_object: Optional[CreateDomainDefaultApplicationJSON] = field(default=None)
    
