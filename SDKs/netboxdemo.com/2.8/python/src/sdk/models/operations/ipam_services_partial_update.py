from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesPartialUpdateRequest:
    path_params: IpamServicesPartialUpdatePathParams = field()
    request: shared.WritableServiceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
