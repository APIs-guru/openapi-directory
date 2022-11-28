from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegistrierkassePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegistrierkasseRequest:
    path_params: GetRegistrierkassePathParams = field()
    

@dataclass
class GetRegistrierkasseResponse:
    content_type: str = field()
    status_code: int = field()
    registrierkasse: Optional[shared.Registrierkasse] = field(default=None)
    
