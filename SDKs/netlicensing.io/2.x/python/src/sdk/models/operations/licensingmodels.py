from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LicensingModelsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class LicensingModelsRequest:
    security: LicensingModelsSecurity = field()
    

@dataclass
class LicensingModelsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
