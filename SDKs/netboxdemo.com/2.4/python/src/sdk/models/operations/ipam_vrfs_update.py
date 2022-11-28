from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsUpdateRequest:
    path_params: IpamVrfsUpdatePathParams = field()
    request: shared.WritableVrfInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVrfsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    vrf: Optional[shared.Vrf] = field(default=None)
    
