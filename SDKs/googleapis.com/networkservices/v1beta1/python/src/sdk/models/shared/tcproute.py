from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tcprouterouterule


@dataclass_json
@dataclass
class TCPRoute:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    gateways: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    meshes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[tcprouterouterule.TCPRouteRouteRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
