from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetContentDirectoryPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentDirectoryRequest:
    path_params: GetContentDirectoryPathParams = field()
    

@dataclass
class GetContentDirectoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_content_directory_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
