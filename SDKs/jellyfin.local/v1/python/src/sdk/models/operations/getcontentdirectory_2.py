from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetContentDirectory2PathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentDirectory2Request:
    path_params: GetContentDirectory2PathParams = field(default=None)
    

@dataclass
class GetContentDirectory2Response:
    content_type: str = field(default=None)
    get_content_directory_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
