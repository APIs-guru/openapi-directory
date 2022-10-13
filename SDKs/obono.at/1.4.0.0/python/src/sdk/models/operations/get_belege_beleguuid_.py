from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBelegeBelegUUIDRequest:
    path_params: GetBelegeBelegUUIDPathParams = field(default=None)
    

@dataclass
class GetBelegeBelegUUIDResponse:
    beleg: Optional[shared.Beleg] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
