from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersReadRequest:
    path_params: DcimManufacturersReadPathParams = field()
    

@dataclass
class DcimManufacturersReadResponse:
    content_type: str = field()
    status_code: int = field()
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    
