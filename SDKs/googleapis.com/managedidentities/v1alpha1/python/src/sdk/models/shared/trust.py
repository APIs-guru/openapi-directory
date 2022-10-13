from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class TrustStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

class TrustTrustDirectionEnum(str, Enum):
    TRUST_DIRECTION_UNSPECIFIED = "TRUST_DIRECTION_UNSPECIFIED"
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"

class TrustTrustTypeEnum(str, Enum):
    TRUST_TYPE_UNSPECIFIED = "TRUST_TYPE_UNSPECIFIED"
    FOREST = "FOREST"
    EXTERNAL = "EXTERNAL"


@dataclass_json
@dataclass
class Trust:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    last_known_trust_connected_heartbeat_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastKnownTrustConnectedHeartbeatTime' }})
    selective_authentication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectiveAuthentication' }})
    state: Optional[TrustStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateDescription' }})
    target_dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetDnsIpAddresses' }})
    target_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetDomainName' }})
    trust_direction: Optional[TrustTrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustDirection' }})
    trust_handshake_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustHandshakeSecret' }})
    trust_type: Optional[TrustTrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustType' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
