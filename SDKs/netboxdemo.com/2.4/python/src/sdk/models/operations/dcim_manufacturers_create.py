from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersCreateRequest:
    request: shared.ManufacturerInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimManufacturersCreateResponse:
    content_type: str = field()
    status_code: int = field()
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    
