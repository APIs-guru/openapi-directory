from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchCaCertsResponse:
    r"""FetchCaCertsResponse
    Response message for CertificateAuthorityService.FetchCaCerts.
    """
    
    ca_certs: Optional[List[CertChain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCerts') }})
    
