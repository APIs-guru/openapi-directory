from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenerateAccessTokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    
