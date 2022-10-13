from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StackPack:
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    icon_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconDataURL' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
