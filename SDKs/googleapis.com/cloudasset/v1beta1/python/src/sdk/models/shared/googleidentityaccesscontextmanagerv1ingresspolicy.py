from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1ingressfrom
from . import googleidentityaccesscontextmanagerv1ingressto


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1IngressPolicy:
    ingress_from: Optional[googleidentityaccesscontextmanagerv1ingressfrom.GoogleIdentityAccesscontextmanagerV1IngressFrom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressFrom' }})
    ingress_to: Optional[googleidentityaccesscontextmanagerv1ingressto.GoogleIdentityAccesscontextmanagerV1IngressTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressTo' }})
    
