from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleiamv1__binding


@dataclass_json
@dataclass
class GoogleIamV1Policy:
    bindings: Optional[List[googleiamv1__binding.GoogleIamV1Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
