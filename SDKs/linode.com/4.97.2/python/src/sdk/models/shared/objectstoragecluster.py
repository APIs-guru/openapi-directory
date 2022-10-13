from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ObjectStorageClusterStatusEnum(str, Enum):
    AVAILABLE = "available"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class ObjectStorageCluster:
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    static_site_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_site_domain' }})
    status: Optional[ObjectStorageClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
