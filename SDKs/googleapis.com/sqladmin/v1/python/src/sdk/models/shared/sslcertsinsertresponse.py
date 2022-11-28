from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SslCertsInsertResponse:
    r"""SslCertsInsertResponse
    SslCert insert response.
    """
    
    client_cert: Optional[SslCertDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCert') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    server_ca_cert: Optional[SslCert] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCert') }})
    
