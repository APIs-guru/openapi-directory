from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDescriptionXML2PathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescriptionXML2Request:
    path_params: GetDescriptionXML2PathParams = field(default=None)
    

@dataclass
class GetDescriptionXML2Response:
    content_type: str = field(default=None)
    get_description_xml_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
