from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import hsalgosettings
from . import rsalgosettings
from . import esalgosettings
from . import jwksalgosettings


@dataclass_json
@dataclass
class GenericOauth2ModuleConfig:
    access_token_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenField' }})
    authorize_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizeUrl' }})
    callback_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUrl' }})
    claims: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    desc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    email_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailField' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jwt_verifier: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtVerifier' }})
    login_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginUrl' }})
    logout_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoutUrl' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    name_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameField' }})
    oid_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidConfig' }})
    otoroshi_data_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otoroshiDataField' }})
    read_profile_from_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readProfileFromToken' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    session_max_age: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionMaxAge' }})
    token_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenUrl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_cookies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCookies' }})
    use_json: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useJson' }})
    user_info_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfoUrl' }})
    
