from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllServiceGroupsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllServiceGroupsRequest:
    security: AllServiceGroupsSecurity = field(default=None)
    

@dataclass
class AllServiceGroupsResponse:
    content_type: str = field(default=None)
    groups: Optional[List[shared.Group]] = field(default=None)
    status_code: int = field(default=None)
    
