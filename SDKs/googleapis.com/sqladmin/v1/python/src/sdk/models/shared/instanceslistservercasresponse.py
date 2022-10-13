from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sslcert


@dataclass_json
@dataclass
class InstancesListServerCasResponse:
    active_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeVersion' }})
    certs: Optional[List[sslcert.SslCert]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certs' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
