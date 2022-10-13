from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucketaccesscontrol


@dataclass_json
@dataclass
class BucketAccessControls:
    items: Optional[List[bucketaccesscontrol.BucketAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
