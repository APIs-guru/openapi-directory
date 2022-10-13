from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class KeysAPIFindPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPIFindRequest:
    path_params: KeysAPIFindPathParams = field(default=None)
    

@dataclass
class KeysAPIFindResponse:
    content_type: str = field(default=None)
    keys_api_find_200_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
