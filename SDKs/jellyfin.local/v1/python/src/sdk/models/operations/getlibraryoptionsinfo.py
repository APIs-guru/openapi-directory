from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLibraryOptionsInfoQueryParams:
    is_new_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isNewLibrary', 'style': 'form', 'explode': True }})
    library_content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'libraryContentType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLibraryOptionsInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLibraryOptionsInfoRequest:
    query_params: GetLibraryOptionsInfoQueryParams = field()
    security: GetLibraryOptionsInfoSecurity = field()
    

@dataclass
class GetLibraryOptionsInfoResponse:
    content_type: str = field()
    status_code: int = field()
    library_options_result_dto: Optional[shared.LibraryOptionsResultDto] = field(default=None)
    
