from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDescriptionXML2PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescriptionXML2Request:
    path_params: GetDescriptionXML2PathParams = field()
    

@dataclass
class GetDescriptionXML2Response:
    content_type: str = field()
    status_code: int = field()
    get_description_xml_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
