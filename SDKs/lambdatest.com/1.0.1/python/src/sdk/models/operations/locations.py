from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LocationsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class LocationsRequest:
    security: LocationsSecurity = field(default=None)
    

@dataclass
class LocationsResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    locations: Optional[shared.Locations] = field(default=None)
    
