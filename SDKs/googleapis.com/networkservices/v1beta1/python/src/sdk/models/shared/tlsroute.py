from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tlsrouterouterule


@dataclass_json
@dataclass
class TLSRoute:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    gateways: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    meshes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[tlsrouterouterule.TLSRouteRouteRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
