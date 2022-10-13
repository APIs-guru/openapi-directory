from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetContentDirectoryPathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentDirectoryRequest:
    path_params: GetContentDirectoryPathParams = field(default=None)
    

@dataclass
class GetContentDirectoryResponse:
    content_type: str = field(default=None)
    get_content_directory_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
