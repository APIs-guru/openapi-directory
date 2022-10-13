from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmwaresourcedetails


@dataclass_json
@dataclass
class Source:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vmware: Optional[vmwaresourcedetails.VmwareSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmware' }})
    
