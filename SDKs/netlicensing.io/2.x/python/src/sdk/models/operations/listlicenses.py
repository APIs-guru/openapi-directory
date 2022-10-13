from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ListLicensesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListLicensesRequest:
    security: ListLicensesSecurity = field(default=None)
    

@dataclass
class ListLicensesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensings: Optional[List[Any]] = field(default=None)
    
