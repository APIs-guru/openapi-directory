from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTunerHostTypesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTunerHostTypesRequest:
    security: GetTunerHostTypesSecurity = field(default=None)
    

@dataclass
class GetTunerHostTypesResponse:
    content_type: str = field(default=None)
    name_id_pairs: Optional[List[shared.NameIDPair]] = field(default=None)
    status_code: int = field(default=None)
    
