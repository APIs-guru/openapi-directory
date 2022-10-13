from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sasportaldeviceconfig
from . import sasportalchannelwithscore
from . import sasportaldevicemetadata
from . import sasportalfrequencyrange
from . import sasportaldevicegrant
from . import sasportaldeviceconfig

class SasPortalDeviceStateEnum(str, Enum):
    DEVICE_STATE_UNSPECIFIED = "DEVICE_STATE_UNSPECIFIED"
    RESERVED = "RESERVED"
    REGISTERED = "REGISTERED"
    DEREGISTERED = "DEREGISTERED"


@dataclass_json
@dataclass
class SasPortalDevice:
    active_config: Optional[sasportaldeviceconfig.SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeConfig' }})
    current_channels: Optional[List[sasportalchannelwithscore.SasPortalChannelWithScore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentChannels' }})
    device_metadata: Optional[sasportaldevicemetadata.SasPortalDeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMetadata' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fcc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fccId' }})
    grant_range_allowlists: Optional[List[sasportalfrequencyrange.SasPortalFrequencyRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantRangeAllowlists' }})
    grants: Optional[List[sasportaldevicegrant.SasPortalDeviceGrant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grants' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preloaded_config: Optional[sasportaldeviceconfig.SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preloadedConfig' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    state: Optional[SasPortalDeviceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
