from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLibraryPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLibraryQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    event_log_uuid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'eventLogUuid', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLibrarySecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLibraryRequest:
    path_params: GetLibraryPathParams = field()
    query_params: GetLibraryQueryParams = field()
    security: GetLibrarySecurity = field()
    

@dataclass
class GetLibraryResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    library_response: Optional[shared.LibraryResponse] = field(default=None)
    
