from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProcessContentDirectoryControlRequestPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProcessContentDirectoryControlRequestRequest:
    path_params: ProcessContentDirectoryControlRequestPathParams = field()
    

@dataclass
class ProcessContentDirectoryControlRequestResponse:
    content_type: str = field()
    status_code: int = field()
    process_content_directory_control_request_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
