from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersCreateRequest:
    request: shared.Manufacturer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimManufacturersCreateResponse:
    content_type: str = field(default=None)
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    status_code: int = field(default=None)
    
