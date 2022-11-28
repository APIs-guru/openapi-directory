from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetContentDirectory3PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentDirectory3Request:
    path_params: GetContentDirectory3PathParams = field()
    

@dataclass
class GetContentDirectory3Response:
    content_type: str = field()
    status_code: int = field()
    get_content_directory_3_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
