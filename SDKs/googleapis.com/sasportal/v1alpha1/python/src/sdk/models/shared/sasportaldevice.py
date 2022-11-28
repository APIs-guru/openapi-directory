from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SasPortalDeviceStateEnum(str, Enum):
    DEVICE_STATE_UNSPECIFIED = "DEVICE_STATE_UNSPECIFIED"
    RESERVED = "RESERVED"
    REGISTERED = "REGISTERED"
    DEREGISTERED = "DEREGISTERED"


@dataclass_json
@dataclass
class SasPortalDeviceInput:
    active_config: Optional[SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConfig') }})
    device_metadata: Optional[SasPortalDeviceMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fcc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fccId') }})
    grant_range_allowlists: Optional[List[SasPortalFrequencyRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantRangeAllowlists') }})
    grants: Optional[List[SasPortalDeviceGrant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preloaded_config: Optional[SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preloadedConfig') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    state: Optional[SasPortalDeviceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class SasPortalDevice:
    active_config: Optional[SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConfig') }})
    current_channels: Optional[List[SasPortalChannelWithScore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentChannels') }})
    device_metadata: Optional[SasPortalDeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fcc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fccId') }})
    grant_range_allowlists: Optional[List[SasPortalFrequencyRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantRangeAllowlists') }})
    grants: Optional[List[SasPortalDeviceGrant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preloaded_config: Optional[SasPortalDeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preloadedConfig') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    state: Optional[SasPortalDeviceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
