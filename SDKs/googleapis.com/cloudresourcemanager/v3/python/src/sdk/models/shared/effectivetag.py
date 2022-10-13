from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EffectiveTag:
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inherited' }})
    namespaced_tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedTagKey' }})
    namespaced_tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedTagValue' }})
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKey' }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValue' }})
    
