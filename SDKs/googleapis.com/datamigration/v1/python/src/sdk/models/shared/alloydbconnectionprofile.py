from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alloydbsettings


@dataclass_json
@dataclass
class AlloyDbConnectionProfile:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    settings: Optional[alloydbsettings.AlloyDbSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
