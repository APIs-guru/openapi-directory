from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProtectionQueryParams:
    from_: float = field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    lat: float = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    to: float = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    alt: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProtectionHeaders:
    x_access_token: str = field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProtectionRequest:
    headers: GetProtectionHeaders = field()
    query_params: GetProtectionQueryParams = field()
    

@dataclass
class GetProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    protection_result: Optional[shared.ProtectionResult] = field(default=None)
    
