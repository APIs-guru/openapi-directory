from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SasPortalInstallationParamsHeightTypeEnum(str, Enum):
    HEIGHT_TYPE_UNSPECIFIED = "HEIGHT_TYPE_UNSPECIFIED"
    HEIGHT_TYPE_AGL = "HEIGHT_TYPE_AGL"
    HEIGHT_TYPE_AMSL = "HEIGHT_TYPE_AMSL"


@dataclass_json
@dataclass
class SasPortalInstallationParams:
    r"""SasPortalInstallationParams
    Information about the device installation parameters.
    """
    
    antenna_azimuth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaAzimuth') }})
    antenna_beamwidth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaBeamwidth') }})
    antenna_downtilt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDowntilt') }})
    antenna_gain: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaGain') }})
    antenna_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaModel') }})
    cpe_cbsd_indication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeCbsdIndication') }})
    eirp_capability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eirpCapability') }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    height_type: Optional[SasPortalInstallationParamsHeightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightType') }})
    horizontal_accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAccuracy') }})
    indoor_deployment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indoorDeployment') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    vertical_accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalAccuracy') }})
    
