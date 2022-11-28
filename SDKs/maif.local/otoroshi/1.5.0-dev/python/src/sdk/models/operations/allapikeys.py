from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllAPIKeysSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllAPIKeysRequest:
    security: AllAPIKeysSecurity = field()
    

@dataclass
class AllAPIKeysResponse:
    content_type: str = field()
    status_code: int = field()
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    
