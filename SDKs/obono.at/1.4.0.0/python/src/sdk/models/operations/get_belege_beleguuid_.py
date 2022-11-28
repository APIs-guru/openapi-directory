from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBelegeBelegUUIDRequest:
    path_params: GetBelegeBelegUUIDPathParams = field()
    

@dataclass
class GetBelegeBelegUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    beleg: Optional[shared.Beleg] = field(default=None)
    
