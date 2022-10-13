from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2OAuthResponseType:
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
