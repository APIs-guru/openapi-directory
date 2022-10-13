from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certchain


@dataclass_json
@dataclass
class FetchCaCertsResponse:
    ca_certs: Optional[List[certchain.CertChain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCerts' }})
    
