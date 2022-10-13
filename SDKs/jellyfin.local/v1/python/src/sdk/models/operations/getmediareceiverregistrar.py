from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMediaReceiverRegistrarPathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMediaReceiverRegistrarRequest:
    path_params: GetMediaReceiverRegistrarPathParams = field(default=None)
    

@dataclass
class GetMediaReceiverRegistrarResponse:
    content_type: str = field(default=None)
    get_media_receiver_registrar_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
