from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatusByUUIDPathParams:
    import_uuid: str = field(metadata={'path_param': { 'field_name': 'importUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatusByUUIDSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatusByUUIDRequest:
    path_params: GetStatusByUUIDPathParams = field()
    security: GetStatusByUUIDSecurity = field()
    

@dataclass
class GetStatusByUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    import_response: Optional[shared.ImportResponse] = field(default=None)
    
