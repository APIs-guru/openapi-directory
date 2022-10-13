from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApnsFcmOptions:
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsLabel' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
