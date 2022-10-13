from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class CreateAbschlussPathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAbschlussRequest:
    path_params: CreateAbschlussPathParams = field(default=None)
    request: shared.Abschlussbelegdaten = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAbschlussResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
