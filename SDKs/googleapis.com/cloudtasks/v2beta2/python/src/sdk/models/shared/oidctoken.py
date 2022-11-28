from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OidcToken:
    r"""OidcToken
    Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
    """
    
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    
