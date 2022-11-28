from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdpCredential:
    r"""IdpCredential
    Credential for verifying signatures produced by the Identity Provider.
    """
    
    dsa_key_info: Optional[DsaPublicKeyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsaKeyInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rsa_key_info: Optional[RsaPublicKeyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsaKeyInfo') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
