from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class KeysAPIExpiryPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeysAPIExpiryRequest:
    path_params: KeysAPIExpiryPathParams = field()
    

@dataclass
class KeysAPIExpiryResponse:
    content_type: str = field()
    status_code: int = field()
    keys_api_expiry_200_application_json_one_of: Optional[Any] = field(default=None)
    
