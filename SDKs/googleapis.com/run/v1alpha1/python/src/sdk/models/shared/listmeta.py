from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListMeta:
    continue_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continue' }})
    resource_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceVersion' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
