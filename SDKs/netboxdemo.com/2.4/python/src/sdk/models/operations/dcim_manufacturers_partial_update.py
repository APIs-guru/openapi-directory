from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersPartialUpdateRequest:
    path_params: DcimManufacturersPartialUpdatePathParams = field(default=None)
    request: shared.Manufacturer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimManufacturersPartialUpdateResponse:
    content_type: str = field(default=None)
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    status_code: int = field(default=None)
    
