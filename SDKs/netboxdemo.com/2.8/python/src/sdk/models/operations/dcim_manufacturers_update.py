from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersUpdateRequest:
    path_params: DcimManufacturersUpdatePathParams = field(default=None)
    request: shared.Manufacturer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimManufacturersUpdateResponse:
    content_type: str = field(default=None)
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    status_code: int = field(default=None)
    
