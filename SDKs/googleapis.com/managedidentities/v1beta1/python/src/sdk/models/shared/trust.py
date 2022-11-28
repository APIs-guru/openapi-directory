from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TrustTrustDirectionEnum(str, Enum):
    TRUST_DIRECTION_UNSPECIFIED = "TRUST_DIRECTION_UNSPECIFIED"
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"

class TrustTrustTypeEnum(str, Enum):
    TRUST_TYPE_UNSPECIFIED = "TRUST_TYPE_UNSPECIFIED"
    FOREST = "FOREST"
    EXTERNAL = "EXTERNAL"

class TrustStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"


@dataclass_json
@dataclass
class TrustInput:
    r"""TrustInput
    Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
    """
    
    selective_authentication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectiveAuthentication') }})
    target_dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDnsIpAddresses') }})
    target_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDomainName') }})
    trust_direction: Optional[TrustTrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustDirection') }})
    trust_handshake_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustHandshakeSecret') }})
    trust_type: Optional[TrustTrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustType') }})
    

@dataclass_json
@dataclass
class Trust:
    r"""Trust
    Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    last_trust_heartbeat_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTrustHeartbeatTime') }})
    selective_authentication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectiveAuthentication') }})
    state: Optional[TrustStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDescription') }})
    target_dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDnsIpAddresses') }})
    target_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDomainName') }})
    trust_direction: Optional[TrustTrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustDirection') }})
    trust_handshake_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustHandshakeSecret') }})
    trust_type: Optional[TrustTrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustType') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
