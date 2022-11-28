from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Trust
    Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    last_known_trust_connected_heartbeat_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastKnownTrustConnectedHeartbeatTime') }})
    selective_authentication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectiveAuthentication') }})
    state: Optional[TrustStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDescription') }})
    target_dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDnsIpAddresses') }})
    target_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDomainName') }})
    trust_direction: Optional[TrustTrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustDirection') }})
    trust_handshake_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustHandshakeSecret') }})
    trust_type: Optional[TrustTrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustType') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
