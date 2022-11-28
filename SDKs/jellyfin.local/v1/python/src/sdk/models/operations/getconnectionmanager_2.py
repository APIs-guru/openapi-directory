from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConnectionManager2PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectionManager2Request:
    path_params: GetConnectionManager2PathParams = field()
    

@dataclass
class GetConnectionManager2Response:
    content_type: str = field()
    status_code: int = field()
    get_connection_manager_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
