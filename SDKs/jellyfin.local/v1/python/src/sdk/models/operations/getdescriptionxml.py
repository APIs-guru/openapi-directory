from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDescriptionXMLPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescriptionXMLRequest:
    path_params: GetDescriptionXMLPathParams = field()
    

@dataclass
class GetDescriptionXMLResponse:
    content_type: str = field()
    status_code: int = field()
    get_description_xml_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
