from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllServiceGroupsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllServiceGroupsRequest:
    security: AllServiceGroupsSecurity = field()
    

@dataclass
class AllServiceGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    groups: Optional[List[shared.Group]] = field(default=None)
    
