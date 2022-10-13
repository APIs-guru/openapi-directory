from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class URLAssignedTargetingOptionDetails:
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negative' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
