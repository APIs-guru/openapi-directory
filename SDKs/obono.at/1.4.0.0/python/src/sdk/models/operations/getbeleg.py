from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBelegPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBelegRequest:
    path_params: GetBelegPathParams = field()
    

@dataclass
class GetBelegResponse:
    content_type: str = field()
    status_code: int = field()
    beleg: Optional[shared.Beleg] = field(default=None)
    
