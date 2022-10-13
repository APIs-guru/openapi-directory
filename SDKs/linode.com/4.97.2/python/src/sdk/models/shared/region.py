from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionResolvers:
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class RegionStatusEnum(str, Enum):
    OK = "ok"
    OUTAGE = "outage"


@dataclass_json
@dataclass
class Region:
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resolvers: Optional[RegionResolvers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvers' }})
    status: Optional[RegionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
