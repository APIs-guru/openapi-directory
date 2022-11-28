from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LicensesReadPathParams:
    license_id: str = field(metadata={'path_param': { 'field_name': 'license_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesReadRequest:
    path_params: LicensesReadPathParams = field()
    

@dataclass
class LicensesReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
