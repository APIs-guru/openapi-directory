from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDomainPathParams:
    domain_id: int = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field()
    security: GetDomainSecurity = field()
    

@dataclass
class GetDomainResponse:
    content_type: str = field()
    status_code: int = field()
    domain: Optional[shared.Domain] = field(default=None)
    get_domain_default_application_json_object: Optional[GetDomainDefaultApplicationJSON] = field(default=None)
    
