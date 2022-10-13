from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKeysSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetKeysRequest:
    security: GetKeysSecurity = field(default=None)
    

@dataclass
class GetKeysResponse:
    authentication_info_query_result: Optional[shared.AuthenticationInfoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
