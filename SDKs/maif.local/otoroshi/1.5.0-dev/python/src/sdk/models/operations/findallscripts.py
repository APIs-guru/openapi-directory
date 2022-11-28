from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllScriptsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllScriptsRequest:
    security: FindAllScriptsSecurity = field()
    

@dataclass
class FindAllScriptsResponse:
    content_type: str = field()
    status_code: int = field()
    scripts: Optional[List[shared.Script]] = field(default=None)
    
