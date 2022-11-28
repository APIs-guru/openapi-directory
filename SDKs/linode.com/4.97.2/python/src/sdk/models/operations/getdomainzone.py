from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDomainZonePathParams:
    domain_id: str = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainZoneSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDomainZoneDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetDomainZoneRequest:
    path_params: GetDomainZonePathParams = field()
    security: GetDomainZoneSecurity = field()
    

@dataclass
class GetDomainZoneResponse:
    content_type: str = field()
    status_code: int = field()
    get_domain_zone_200_application_json_any: Optional[Any] = field(default=None)
    get_domain_zone_default_application_json_object: Optional[GetDomainZoneDefaultApplicationJSON] = field(default=None)
    
