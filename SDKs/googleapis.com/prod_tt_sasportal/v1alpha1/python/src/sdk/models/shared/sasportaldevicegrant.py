from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sasportalfrequencyrange
from . import sasportaldpamovelist

class SasPortalDeviceGrantChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "CHANNEL_TYPE_UNSPECIFIED"
    CHANNEL_TYPE_GAA = "CHANNEL_TYPE_GAA"
    CHANNEL_TYPE_PAL = "CHANNEL_TYPE_PAL"

class SasPortalDeviceGrantStateEnum(str, Enum):
    GRANT_STATE_UNSPECIFIED = "GRANT_STATE_UNSPECIFIED"
    GRANT_STATE_GRANTED = "GRANT_STATE_GRANTED"
    GRANT_STATE_TERMINATED = "GRANT_STATE_TERMINATED"
    GRANT_STATE_SUSPENDED = "GRANT_STATE_SUSPENDED"
    GRANT_STATE_AUTHORIZED = "GRANT_STATE_AUTHORIZED"
    GRANT_STATE_EXPIRED = "GRANT_STATE_EXPIRED"


@dataclass_json
@dataclass
class SasPortalDeviceGrant:
    channel_type: Optional[SasPortalDeviceGrantChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelType' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    frequency_range: Optional[sasportalfrequencyrange.SasPortalFrequencyRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyRange' }})
    grant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantId' }})
    last_heartbeat_transmit_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastHeartbeatTransmitExpireTime' }})
    max_eirp: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEirp' }})
    move_list: Optional[List[sasportaldpamovelist.SasPortalDpaMoveList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moveList' }})
    state: Optional[SasPortalDeviceGrantStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    suspension_reason: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionReason' }})
    
