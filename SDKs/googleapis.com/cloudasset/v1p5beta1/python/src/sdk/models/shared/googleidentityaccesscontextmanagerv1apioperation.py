from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1methodselector


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1APIOperation:
    method_selectors: Optional[List[googleidentityaccesscontextmanagerv1methodselector.GoogleIdentityAccesscontextmanagerV1MethodSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodSelectors' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
