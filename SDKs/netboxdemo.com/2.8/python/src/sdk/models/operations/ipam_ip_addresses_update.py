from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesUpdateRequest:
    path_params: IpamIPAddressesUpdatePathParams = field()
    request: shared.WritableIPAddressInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamIPAddressesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    
