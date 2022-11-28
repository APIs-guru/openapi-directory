from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SslCertDetail:
    r"""SslCertDetail
    SslCertDetail.
    """
    
    cert_info: Optional[SslCert] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certInfo') }})
    cert_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certPrivateKey') }})
    
