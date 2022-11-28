from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMediaReceiverRegistrarPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMediaReceiverRegistrarRequest:
    path_params: GetMediaReceiverRegistrarPathParams = field()
    

@dataclass
class GetMediaReceiverRegistrarResponse:
    content_type: str = field()
    status_code: int = field()
    get_media_receiver_registrar_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
