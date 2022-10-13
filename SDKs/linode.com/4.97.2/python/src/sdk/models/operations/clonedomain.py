from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CloneDomainPathParams:
    domain_id: str = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneDomainRequestBody:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    

@dataclass
class CloneDomainSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CloneDomainSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneDomainSecurity:
    option1: Optional[CloneDomainSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloneDomainSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloneDomainRequest:
    path_params: CloneDomainPathParams = field(default=None)
    request: CloneDomainRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CloneDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CloneDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CloneDomainResponse:
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    clone_domain_default_application_json_object: Optional[CloneDomainDefaultApplicationJSON] = field(default=None)
    
