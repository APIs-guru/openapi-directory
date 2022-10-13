from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllAPIKeysSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllAPIKeysRequest:
    security: AllAPIKeysSecurity = field(default=None)
    

@dataclass
class AllAPIKeysResponse:
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
