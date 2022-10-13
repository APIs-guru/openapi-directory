from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProcessContentDirectoryControlRequestPathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProcessContentDirectoryControlRequestRequest:
    path_params: ProcessContentDirectoryControlRequestPathParams = field(default=None)
    

@dataclass
class ProcessContentDirectoryControlRequestResponse:
    content_type: str = field(default=None)
    process_content_directory_control_request_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
