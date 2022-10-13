from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegistrierkassePathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegistrierkasseRequest:
    path_params: GetRegistrierkassePathParams = field(default=None)
    

@dataclass
class GetRegistrierkasseResponse:
    content_type: str = field(default=None)
    registrierkasse: Optional[shared.Registrierkasse] = field(default=None)
    status_code: int = field(default=None)
    
