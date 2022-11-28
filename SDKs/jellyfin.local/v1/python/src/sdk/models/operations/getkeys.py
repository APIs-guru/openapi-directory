from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKeysSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetKeysRequest:
    security: GetKeysSecurity = field()
    

@dataclass
class GetKeysResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_info_query_result: Optional[shared.AuthenticationInfoQueryResult] = field(default=None)
    
