from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsPartialUpdateRequest:
    path_params: IpamVrfsPartialUpdatePathParams = field()
    request: shared.WritableVrfInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVrfsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    vrf: Optional[shared.Vrf] = field(default=None)
    
