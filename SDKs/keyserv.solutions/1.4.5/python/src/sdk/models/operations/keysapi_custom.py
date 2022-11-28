from dataclasses import dataclass, field
from typing import Optional


@dataclass
class KeysAPICustomPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPICustomRequest:
    path_params: KeysAPICustomPathParams = field()
    

@dataclass
class KeysAPICustomResponse:
    content_type: str = field()
    status_code: int = field()
    keys_api_custom_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
