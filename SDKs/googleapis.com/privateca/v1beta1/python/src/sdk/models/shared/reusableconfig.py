from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reusableconfigvalues


@dataclass_json
@dataclass
class ReusableConfig:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    values: Optional[reusableconfigvalues.ReusableConfigValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
