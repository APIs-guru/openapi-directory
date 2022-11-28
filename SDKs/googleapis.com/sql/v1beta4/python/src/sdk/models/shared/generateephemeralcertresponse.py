from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateEphemeralCertResponse:
    r"""GenerateEphemeralCertResponse
    Ephemeral certificate creation request.
    """
    
    ephemeral_cert: Optional[SslCert] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralCert') }})
    
