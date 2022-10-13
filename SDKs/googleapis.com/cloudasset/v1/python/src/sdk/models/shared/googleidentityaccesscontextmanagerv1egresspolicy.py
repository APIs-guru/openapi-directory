from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1egressfrom
from . import googleidentityaccesscontextmanagerv1egressto


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1EgressPolicy:
    egress_from: Optional[googleidentityaccesscontextmanagerv1egressfrom.GoogleIdentityAccesscontextmanagerV1EgressFrom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressFrom' }})
    egress_to: Optional[googleidentityaccesscontextmanagerv1egressto.GoogleIdentityAccesscontextmanagerV1EgressTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressTo' }})
    
