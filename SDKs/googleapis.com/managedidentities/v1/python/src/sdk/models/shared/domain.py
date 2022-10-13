from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import trust

class DomainStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    PERFORMING_MAINTENANCE = "PERFORMING_MAINTENANCE"
    UNAVAILABLE = "UNAVAILABLE"


@dataclass_json
@dataclass
class Domain:
    admin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    audit_logs_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogsEnabled' }})
    authorized_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedNetworks' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRange' }})
    state: Optional[DomainStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    trusts: Optional[List[trust.Trust]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trusts' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
