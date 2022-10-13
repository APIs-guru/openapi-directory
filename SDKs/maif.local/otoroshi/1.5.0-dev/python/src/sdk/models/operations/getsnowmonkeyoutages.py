from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSnowMonkeyOutagesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnowMonkeyOutagesRequest:
    security: GetSnowMonkeyOutagesSecurity = field(default=None)
    

@dataclass
class GetSnowMonkeyOutagesResponse:
    content_type: str = field(default=None)
    outages: Optional[List[shared.Outage]] = field(default=None)
    status_code: int = field(default=None)
    
