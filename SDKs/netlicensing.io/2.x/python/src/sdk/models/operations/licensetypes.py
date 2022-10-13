from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LicenseTypesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class LicenseTypesRequest:
    security: LicenseTypesSecurity = field(default=None)
    

@dataclass
class LicenseTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
