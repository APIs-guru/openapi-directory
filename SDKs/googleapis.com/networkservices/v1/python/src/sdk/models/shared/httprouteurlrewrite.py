from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRouteURLRewrite:
    host_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostRewrite' }})
    path_prefix_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathPrefixRewrite' }})
    
