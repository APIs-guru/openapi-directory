from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConnectionManagerPathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectionManagerRequest:
    path_params: GetConnectionManagerPathParams = field(default=None)
    

@dataclass
class GetConnectionManagerResponse:
    content_type: str = field(default=None)
    get_connection_manager_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
