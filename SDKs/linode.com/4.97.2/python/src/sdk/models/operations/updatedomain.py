from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDomainPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDomainSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDomainSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateDomainSecurity:
    option1: Optional[UpdateDomainSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateDomainSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateDomainRequest:
    path_params: UpdateDomainPathParams = field(default=None)
    request: shared.Domain = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateDomainResponse:
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    update_domain_default_application_json_object: Optional[UpdateDomainDefaultApplicationJSON] = field(default=None)
    
