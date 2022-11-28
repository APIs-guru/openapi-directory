from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLatestImportStatusPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestImportStatusSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLatestImportStatusRequest:
    path_params: GetLatestImportStatusPathParams = field()
    security: GetLatestImportStatusSecurity = field()
    

@dataclass
class GetLatestImportStatusResponse:
    content_type: str = field()
    status_code: int = field()
    import_response: Optional[shared.ImportResponse] = field(default=None)
    
