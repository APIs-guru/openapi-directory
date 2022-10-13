from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class KeysAPICurrentPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPICurrentRequest:
    path_params: KeysAPICurrentPathParams = field(default=None)
    

@dataclass
class KeysAPICurrentResponse:
    content_type: str = field(default=None)
    keys_api_current_200_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
