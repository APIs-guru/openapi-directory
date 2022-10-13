from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportLibraryV2PathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportLibraryV2SecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImportLibraryV2SecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ImportLibraryV2Security:
    option1: Optional[ImportLibraryV2SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ImportLibraryV2SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ImportLibraryV2Request:
    path_params: ImportLibraryV2PathParams = field(default=None)
    request: shared.BulkImportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ImportLibraryV2Security = field(default=None)
    

@dataclass
class ImportLibraryV2Response:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    import_response: Optional[shared.ImportResponse] = field(default=None)
    status_code: int = field(default=None)
    
