from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2OAuthResponseType:
    r"""GoogleCloudIdentitytoolkitAdminV2OAuthResponseType
    The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
    """
    
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
