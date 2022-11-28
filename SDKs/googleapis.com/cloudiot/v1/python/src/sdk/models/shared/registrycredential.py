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
class RegistryCredential:
    r"""RegistryCredential
    A server-stored registry credential used to validate device credentials.
    """
    
    public_key_certificate: Optional[PublicKeyCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyCertificate') }})
    
