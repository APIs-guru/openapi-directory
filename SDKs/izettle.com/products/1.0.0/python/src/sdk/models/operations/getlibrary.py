from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLibraryPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLibraryQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    event_log_uuid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'eventLogUuid', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLibrarySecurityOption1:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLibrarySecurityOption2:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLibrarySecurity:
    option1: Optional[GetLibrarySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLibrarySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLibraryRequest:
    path_params: GetLibraryPathParams = field(default=None)
    query_params: GetLibraryQueryParams = field(default=None)
    security: GetLibrarySecurity = field(default=None)
    

@dataclass
class GetLibraryResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    library_response: Optional[shared.LibraryResponse] = field(default=None)
    status_code: int = field(default=None)
    
