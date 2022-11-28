from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersPartialUpdateRequest:
    path_params: DcimManufacturersPartialUpdatePathParams = field()
    request: shared.ManufacturerInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimManufacturersPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    
