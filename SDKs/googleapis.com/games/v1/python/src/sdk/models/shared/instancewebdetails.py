from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceWebDetails:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    launch_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchUrl' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    
