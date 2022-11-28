from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CloneDomainPathParams:
    domain_id: str = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneDomainRequestBody:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    

@dataclass
class CloneDomainSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CloneDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CloneDomainRequest:
    path_params: CloneDomainPathParams = field()
    request: CloneDomainRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CloneDomainSecurity = field()
    

@dataclass
class CloneDomainResponse:
    content_type: str = field()
    status_code: int = field()
    domain: Optional[shared.Domain] = field(default=None)
    clone_domain_default_application_json_object: Optional[CloneDomainDefaultApplicationJSON] = field(default=None)
    
