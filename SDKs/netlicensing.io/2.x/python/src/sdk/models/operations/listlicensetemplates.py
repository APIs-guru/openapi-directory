from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListLicenseTemplatesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListLicenseTemplatesRequest:
    security: ListLicenseTemplatesSecurity = field()
    

@dataclass
class ListLicenseTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensings: Optional[List[Any]] = field(default=None)
    
