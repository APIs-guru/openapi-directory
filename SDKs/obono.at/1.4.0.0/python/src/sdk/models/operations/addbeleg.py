from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from sdk.models import shared


@dataclass
class AddBelegPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddBelegRequest:
    path_params: AddBelegPathParams = field()
    request: shared.Belegdaten = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddBelegResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
