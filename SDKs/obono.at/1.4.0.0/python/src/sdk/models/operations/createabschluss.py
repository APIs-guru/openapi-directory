from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from sdk.models import shared


@dataclass
class CreateAbschlussPathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAbschlussRequest:
    path_params: CreateAbschlussPathParams = field()
    request: shared.Abschlussbelegdaten = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAbschlussResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
