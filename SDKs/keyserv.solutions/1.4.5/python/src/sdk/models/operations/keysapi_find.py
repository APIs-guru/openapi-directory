from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class KeysAPIFindPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPIFindRequest:
    path_params: KeysAPIFindPathParams = field()
    

@dataclass
class KeysAPIFindResponse:
    content_type: str = field()
    status_code: int = field()
    keys_api_find_200_application_json_one_of: Optional[Any] = field(default=None)
    
