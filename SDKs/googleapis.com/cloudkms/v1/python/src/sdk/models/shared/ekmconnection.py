from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceresolver


@dataclass_json
@dataclass
class EkmConnection:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_resolvers: Optional[List[serviceresolver.ServiceResolver]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceResolvers' }})
    
