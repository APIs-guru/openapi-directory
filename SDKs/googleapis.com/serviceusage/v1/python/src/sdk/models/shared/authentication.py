from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Authentication:
    r"""Authentication
    `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: \"*\" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read
    """
    
    providers: Optional[List[AuthProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providers') }})
    rules: Optional[List[AuthenticationRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
