from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAuthProvidersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAuthProvidersRequest:
    security: GetAuthProvidersSecurity = field()
    

@dataclass
class GetAuthProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    name_id_pairs: Optional[List[shared.NameIDPair]] = field(default=None)
    
