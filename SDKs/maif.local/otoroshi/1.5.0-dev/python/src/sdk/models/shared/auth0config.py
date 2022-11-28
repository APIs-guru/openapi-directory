from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Auth0Config:
    r"""Auth0Config
    Configuration for Auth0 domain
    """
    
    callback_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
