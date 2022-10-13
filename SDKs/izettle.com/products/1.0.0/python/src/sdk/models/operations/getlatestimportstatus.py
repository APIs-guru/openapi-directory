from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLatestImportStatusPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestImportStatusSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLatestImportStatusSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLatestImportStatusSecurity:
    option1: Optional[GetLatestImportStatusSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLatestImportStatusSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLatestImportStatusRequest:
    path_params: GetLatestImportStatusPathParams = field(default=None)
    security: GetLatestImportStatusSecurity = field(default=None)
    

@dataclass
class GetLatestImportStatusResponse:
    content_type: str = field(default=None)
    import_response: Optional[shared.ImportResponse] = field(default=None)
    status_code: int = field(default=None)
    
