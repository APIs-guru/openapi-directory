from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProtectionQueryParams:
    alt: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    from_: float = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    to: float = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProtectionHeaders:
    x_access_token: str = field(default=None, metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProtectionRequest:
    query_params: GetProtectionQueryParams = field(default=None)
    headers: GetProtectionHeaders = field(default=None)
    

@dataclass
class GetProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protection_result: Optional[shared.ProtectionResult] = field(default=None)
    
