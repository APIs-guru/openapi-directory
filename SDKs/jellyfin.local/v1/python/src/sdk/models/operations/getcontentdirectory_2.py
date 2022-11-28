from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetContentDirectory2PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentDirectory2Request:
    path_params: GetContentDirectory2PathParams = field()
    

@dataclass
class GetContentDirectory2Response:
    content_type: str = field()
    status_code: int = field()
    get_content_directory_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
