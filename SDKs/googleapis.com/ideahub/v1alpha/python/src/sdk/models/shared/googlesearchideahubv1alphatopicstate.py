from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaTopicState:
    dismissed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    saved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saved' }})
    
