from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesUpdateRequest:
    path_params: IpamServicesUpdatePathParams = field()
    request: shared.WritableServiceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
