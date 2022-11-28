from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSnowMonkeyOutagesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnowMonkeyOutagesRequest:
    security: GetSnowMonkeyOutagesSecurity = field()
    

@dataclass
class GetSnowMonkeyOutagesResponse:
    content_type: str = field()
    status_code: int = field()
    outages: Optional[List[shared.Outage]] = field(default=None)
    
