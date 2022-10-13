from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class AddBelegPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddBelegRequest:
    path_params: AddBelegPathParams = field(default=None)
    request: shared.Belegdaten = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddBelegResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
