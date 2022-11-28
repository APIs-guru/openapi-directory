from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConnectionManager3PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectionManager3Request:
    path_params: GetConnectionManager3PathParams = field()
    

@dataclass
class GetConnectionManager3Response:
    content_type: str = field()
    status_code: int = field()
    get_connection_manager_3_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
