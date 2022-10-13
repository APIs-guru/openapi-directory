from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ListPaymentMethodsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListPaymentMethodsRequest:
    security: ListPaymentMethodsSecurity = field(default=None)
    

@dataclass
class ListPaymentMethodsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensings: Optional[List[Any]] = field(default=None)
    
