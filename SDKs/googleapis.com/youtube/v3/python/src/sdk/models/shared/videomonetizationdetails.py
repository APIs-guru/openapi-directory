from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accesspolicy


@dataclass_json
@dataclass
class VideoMonetizationDetails:
    access: Optional[accesspolicy.AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    
