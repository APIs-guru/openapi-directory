from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainZonePathParams:
    domain_id: str = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainZoneSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDomainZoneSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDomainZoneSecurity:
    option1: Optional[GetDomainZoneSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDomainZoneSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDomainZoneRequest:
    path_params: GetDomainZonePathParams = field(default=None)
    security: GetDomainZoneSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDomainZoneDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetDomainZoneResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_domain_zone_200_application_json_any: Optional[Any] = field(default=None)
    get_domain_zone_default_application_json_object: Optional[GetDomainZoneDefaultApplicationJSON] = field(default=None)
    
