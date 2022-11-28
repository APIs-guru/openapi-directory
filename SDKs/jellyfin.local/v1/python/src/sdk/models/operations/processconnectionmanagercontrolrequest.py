from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProcessConnectionManagerControlRequestPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProcessConnectionManagerControlRequestRequest:
    path_params: ProcessConnectionManagerControlRequestPathParams = field()
    

@dataclass
class ProcessConnectionManagerControlRequestResponse:
    content_type: str = field()
    status_code: int = field()
    process_connection_manager_control_request_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
