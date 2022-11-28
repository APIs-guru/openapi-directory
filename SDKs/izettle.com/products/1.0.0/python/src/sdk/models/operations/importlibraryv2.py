from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportLibraryV2PathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportLibraryV2Security:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ImportLibraryV2Request:
    path_params: ImportLibraryV2PathParams = field()
    request: shared.BulkImportRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ImportLibraryV2Security = field()
    

@dataclass
class ImportLibraryV2Response:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    import_response: Optional[shared.ImportResponse] = field(default=None)
    
