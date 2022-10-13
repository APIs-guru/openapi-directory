from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sslcertdetail
from . import operation
from . import sslcert


@dataclass_json
@dataclass
class SslCertsInsertResponse:
    client_cert: Optional[sslcertdetail.SslCertDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCert' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    server_ca_cert: Optional[sslcert.SslCert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCaCert' }})
    
