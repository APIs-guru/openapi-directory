from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DomainStatusEnum(str, Enum):
    DISABLED = "disabled"
    ACTIVE = "active"

class DomainTypeEnum(str, Enum):
    MASTER = "master"
    SLAVE = "slave"


@dataclass_json
@dataclass
class Domain:
    axfr_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'axfr_ips' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    expire_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_sec' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    master_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master_ips' }})
    refresh_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_sec' }})
    retry_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retry_sec' }})
    soa_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soa_email' }})
    status: Optional[DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    ttl_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl_sec' }})
    type: Optional[DomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
