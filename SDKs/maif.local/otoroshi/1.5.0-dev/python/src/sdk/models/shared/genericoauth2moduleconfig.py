from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenericOauth2ModuleConfig:
    r"""GenericOauth2ModuleConfig
    Settings to authenticate users using a generic OAuth2 provider
    """
    
    access_token_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenField') }})
    authorize_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizeUrl') }})
    callback_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    desc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    email_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailField') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginUrl') }})
    logout_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoutUrl') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameField') }})
    otoroshi_data_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('otoroshiDataField') }})
    session_max_age: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    token_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenUrl') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_info_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoUrl') }})
    claims: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    jwt_verifier: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtVerifier') }})
    oid_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidConfig') }})
    read_profile_from_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readProfileFromToken') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    use_cookies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCookies') }})
    use_json: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useJson') }})
    
