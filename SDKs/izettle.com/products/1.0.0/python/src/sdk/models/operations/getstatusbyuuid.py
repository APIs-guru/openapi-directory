from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatusByUUIDPathParams:
    import_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'importUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatusByUUIDSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetStatusByUUIDSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatusByUUIDSecurity:
    option1: Optional[GetStatusByUUIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetStatusByUUIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetStatusByUUIDRequest:
    path_params: GetStatusByUUIDPathParams = field(default=None)
    security: GetStatusByUUIDSecurity = field(default=None)
    

@dataclass
class GetStatusByUUIDResponse:
    content_type: str = field(default=None)
    import_response: Optional[shared.ImportResponse] = field(default=None)
    status_code: int = field(default=None)
    
