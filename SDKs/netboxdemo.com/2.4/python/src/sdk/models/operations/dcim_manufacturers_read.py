from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimManufacturersReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersReadRequest:
    path_params: DcimManufacturersReadPathParams = field(default=None)
    

@dataclass
class DcimManufacturersReadResponse:
    content_type: str = field(default=None)
    manufacturer: Optional[shared.Manufacturer] = field(default=None)
    status_code: int = field(default=None)
    
