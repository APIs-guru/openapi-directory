from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDomainSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDomainSecurity:
    option1: Optional[GetDomainSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDomainSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field(default=None)
    security: GetDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetDomainResponse:
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    get_domain_default_application_json_object: Optional[GetDomainDefaultApplicationJSON] = field(default=None)
    
