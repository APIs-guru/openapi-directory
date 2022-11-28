from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProcessMediaReceiverRegistrarControlRequestPathParams:
    server_id: str = field(metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProcessMediaReceiverRegistrarControlRequestRequest:
    path_params: ProcessMediaReceiverRegistrarControlRequestPathParams = field()
    

@dataclass
class ProcessMediaReceiverRegistrarControlRequestResponse:
    content_type: str = field()
    status_code: int = field()
    process_media_receiver_registrar_control_request_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
