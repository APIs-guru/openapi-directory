from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkFirmwareUpgradesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    participate_in_next_beta_release: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participateInNextBetaRelease') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion
    The version to be updated to
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade
    The pending firmware upgrade if it exists
    """
    
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    to_version: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless
    The network device to be updated
    """
    
    next_upgrade: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpgrade') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBodyProducts:
    r"""UpdateNetworkFirmwareUpgradesRequestBodyProducts
    Contains information about the network to update
    """
    
    appliance: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliance') }})
    camera: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('camera') }})
    cellular_gateway: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellularGateway') }})
    environmental: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmental') }})
    sensor: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensor') }})
    switch: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switch') }})
    vmx_host: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmxHost') }})
    wireless: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wireless') }})
    
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
    r"""UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow
    Upgrade window for devices in network
    """
    
    day_of_week: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    hour_of_day: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourOfDay') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFirmwareUpgradesRequestBody:
    products: Optional[UpdateNetworkFirmwareUpgradesRequestBodyProducts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    upgrade_window: Optional[UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeWindow') }})
    

@dataclass
class UpdateNetworkFirmwareUpgradesRequest:
    path_params: UpdateNetworkFirmwareUpgradesPathParams = field()
    request: Optional[UpdateNetworkFirmwareUpgradesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkFirmwareUpgradesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_firmware_upgrades_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
