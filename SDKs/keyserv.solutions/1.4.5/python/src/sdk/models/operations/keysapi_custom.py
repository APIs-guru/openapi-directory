from dataclasses import dataclass, field
from typing import Optional


@dataclass
class KeysAPICustomPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPICustomRequest:
    path_params: KeysAPICustomPathParams = field(default=None)
    

@dataclass
class KeysAPICustomResponse:
    content_type: str = field(default=None)
    keys_api_custom_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
