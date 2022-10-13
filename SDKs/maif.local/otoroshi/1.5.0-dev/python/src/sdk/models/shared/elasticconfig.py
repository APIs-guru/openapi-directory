from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElasticConfig:
    cluster_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUri' }})
    headers: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    index: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
