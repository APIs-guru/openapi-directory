from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsPartialUpdateRequest:
    path_params: IpamRirsPartialUpdatePathParams = field()
    request: shared.RirInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRirsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rir: Optional[shared.Rir] = field(default=None)
    
