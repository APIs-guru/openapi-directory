from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import item
from . import osinfo


@dataclass_json
@dataclass
class Inventory:
    items: Optional[dict[str, item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_info: Optional[osinfo.OsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osInfo' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
