from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replication


@dataclass_json
@dataclass
class Secret:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    replication: Optional[replication.Replication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replication' }})
    
