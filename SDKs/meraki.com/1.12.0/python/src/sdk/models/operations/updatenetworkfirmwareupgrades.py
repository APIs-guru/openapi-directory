from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkFirmwareUpgradesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    participate_in_next_beta_release: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participateInNextBetaRelease' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade:
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless:
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUpgrade' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProducts:
    appliance: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliance' }})
    camera: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'camera' }})
    cellular_gateway: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellularGateway' }})
    environmental: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmental' }})
    sensor: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensor' }})
    switch: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switch' }})
    vmx_host: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmxHost' }})
    wireless: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wireless' }})
    
class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum(str, Enum):
    SUN = "sun"
    MON = "mon"
    TUE = "tue"
    WED = "wed"
    THU = "thu"
    FRI = "fri"
    SAT = "sat"
    SUNDAY = "sunday"
    MONDAY = "monday"
    TUESDAY = "tuesday"
    WEDNESDAY = "wednesday"
    THURSDAY = "thursday"
    FRIDAY = "friday"
    SATURDAY = "saturday"

class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum(str, Enum):
    ZERO_00 = "0:00"
    ONE_00 = "1:00"
    TWO_00 = "2:00"
    THREE_00 = "3:00"
    FOUR_00 = "4:00"
    FIVE_00 = "5:00"
    SIX_00 = "6:00"
    SEVEN_00 = "7:00"
    EIGHT_00 = "8:00"
    NINE_00 = "9:00"
    TEN_00 = "10:00"
    ELEVEN_00 = "11:00"
    TWELVE_00 = "12:00"
    THIRTEEN_00 = "13:00"
    FOURTEEN_00 = "14:00"
    FIFTEEN_00 = "15:00"
    SIXTEEN_00 = "16:00"
    SEVENTEEN_00 = "17:00"
    EIGHTEEN_00 = "18:00"
    NINETEEN_00 = "19:00"
    TWENTY_00 = "20:00"
    TWENTY_ONE_00 = "21:00"
    TWENTY_TWO_00 = "22:00"
    TWENTY_THREE_00 = "23:00"


@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow:
    day_of_week: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    hour_of_day: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourOfDay' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBody:
    products: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProducts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    upgrade_window: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeWindow' }})
    

@dataclass
class UpdateNetworkFirmwareUpgradesRequest:
    path_params: UpdateNetworkFirmwareUpgradesPathParams = field(default=None)
    request: Optional[UpdateNetworkFirmwareUpgradesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkFirmwareUpgradesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_firmware_upgrades_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
