from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sasportaldeviceairinterface
from . import sasportalinstallationparams
from . import sasportaldevicemodel

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
    air_interface: Optional[sasportaldeviceairinterface.SasPortalDeviceAirInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'airInterface' }})
    call_sign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callSign' }})
    category: Optional[SasPortalDeviceConfigCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    installation_params: Optional[sasportalinstallationparams.SasPortalInstallationParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installationParams' }})
    is_signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSigned' }})
    measurement_capabilities: Optional[List[SasPortalDeviceConfigMeasurementCapabilitiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementCapabilities' }})
    model: Optional[sasportaldevicemodel.SasPortalDeviceModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    state: Optional[SasPortalDeviceConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
