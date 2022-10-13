from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaAccessToken:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    access_token_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenExpireTime' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    refresh_token_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshTokenExpireTime' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenType' }})
    
