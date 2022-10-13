from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LicensingModelsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class LicensingModelsRequest:
    security: LicensingModelsSecurity = field(default=None)
    

@dataclass
class LicensingModelsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
