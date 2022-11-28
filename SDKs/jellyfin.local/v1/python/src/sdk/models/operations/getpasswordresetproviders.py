from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPasswordResetProvidersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPasswordResetProvidersRequest:
    security: GetPasswordResetProvidersSecurity = field()
    

@dataclass
class GetPasswordResetProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    name_id_pairs: Optional[List[shared.NameIDPair]] = field(default=None)
    
