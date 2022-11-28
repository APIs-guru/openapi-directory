from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCulturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCulturesRequest:
    security: GetCulturesSecurity = field()
    

@dataclass
class GetCulturesResponse:
    content_type: str = field()
    status_code: int = field()
    culture_dtos: Optional[List[shared.CultureDto]] = field(default=None)
    
