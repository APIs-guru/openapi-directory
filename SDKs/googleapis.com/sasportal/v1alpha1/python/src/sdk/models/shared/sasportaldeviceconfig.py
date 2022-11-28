from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SasPortalDeviceConfigCategoryEnum(str, Enum):
    DEVICE_CATEGORY_UNSPECIFIED = "DEVICE_CATEGORY_UNSPECIFIED"
    DEVICE_CATEGORY_A = "DEVICE_CATEGORY_A"
    DEVICE_CATEGORY_B = "DEVICE_CATEGORY_B"

class SasPortalDeviceConfigMeasurementCapabilitiesEnum(str, Enum):
    MEASUREMENT_CAPABILITY_UNSPECIFIED = "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"

class SasPortalDeviceConfigStateEnum(str, Enum):
    DEVICE_CONFIG_STATE_UNSPECIFIED = "DEVICE_CONFIG_STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class SasPortalDeviceConfig:
    r"""SasPortalDeviceConfig
    Information about the device configuration.
    """
    
    air_interface: Optional[SasPortalDeviceAirInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airInterface') }})
    call_sign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callSign') }})
    category: Optional[SasPortalDeviceConfigCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    installation_params: Optional[SasPortalInstallationParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installationParams') }})
    is_signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSigned') }})
    measurement_capabilities: Optional[List[SasPortalDeviceConfigMeasurementCapabilitiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementCapabilities') }})
    model: Optional[SasPortalDeviceModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    state: Optional[SasPortalDeviceConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
