from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDirectoryContentsQueryParams:
    path: str = field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    include_directories: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDirectories', 'style': 'form', 'explode': True }})
    include_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeFiles', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectoryContentsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDirectoryContentsRequest:
    query_params: GetDirectoryContentsQueryParams = field()
    security: GetDirectoryContentsSecurity = field()
    

@dataclass
class GetDirectoryContentsResponse:
    content_type: str = field()
    status_code: int = field()
    file_system_entry_infos: Optional[List[shared.FileSystemEntryInfo]] = field(default=None)
    
