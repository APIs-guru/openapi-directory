from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class KeysAPICurrentPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPICurrentRequest:
    path_params: KeysAPICurrentPathParams = field()
    

@dataclass
class KeysAPICurrentResponse:
    content_type: str = field()
    status_code: int = field()
    keys_api_current_200_application_json_one_of: Optional[Any] = field(default=None)
    
