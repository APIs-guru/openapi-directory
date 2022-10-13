from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1apioperation


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1IngressTo:
    operations: Optional[List[googleidentityaccesscontextmanagerv1apioperation.GoogleIdentityAccesscontextmanagerV1APIOperation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
