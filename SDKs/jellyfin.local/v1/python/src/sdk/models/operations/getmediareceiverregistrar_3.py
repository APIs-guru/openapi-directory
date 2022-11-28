from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMediaReceiverRegistrar3PathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMediaReceiverRegistrar3Request:
    path_params: GetMediaReceiverRegistrar3PathParams = field()
    

@dataclass
class GetMediaReceiverRegistrar3Response:
    content_type: str = field()
    status_code: int = field()
    get_media_receiver_registrar_3_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
