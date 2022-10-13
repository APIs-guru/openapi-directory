from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMediaReceiverRegistrar2PathParams:
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMediaReceiverRegistrar2Request:
    path_params: GetMediaReceiverRegistrar2PathParams = field(default=None)
    

@dataclass
class GetMediaReceiverRegistrar2Response:
    content_type: str = field(default=None)
    get_media_receiver_registrar_2_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
