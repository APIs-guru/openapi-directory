from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcrouterouterule


@dataclass_json
@dataclass
class GrpcRoute:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    gateways: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    hostnames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostnames' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    meshes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[grpcrouterouterule.GrpcRouteRouteRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
