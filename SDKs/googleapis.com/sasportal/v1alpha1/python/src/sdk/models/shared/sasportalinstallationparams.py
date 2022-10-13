from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SasPortalInstallationParamsHeightTypeEnum(str, Enum):
    HEIGHT_TYPE_UNSPECIFIED = "HEIGHT_TYPE_UNSPECIFIED"
    HEIGHT_TYPE_AGL = "HEIGHT_TYPE_AGL"
    HEIGHT_TYPE_AMSL = "HEIGHT_TYPE_AMSL"


@dataclass_json
@dataclass
class SasPortalInstallationParams:
    antenna_azimuth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaAzimuth' }})
    antenna_beamwidth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaBeamwidth' }})
    antenna_downtilt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDowntilt' }})
    antenna_gain: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaGain' }})
    antenna_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaModel' }})
    cpe_cbsd_indication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeCbsdIndication' }})
    eirp_capability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eirpCapability' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    height_type: Optional[SasPortalInstallationParamsHeightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightType' }})
    horizontal_accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalAccuracy' }})
    indoor_deployment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorDeployment' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    vertical_accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalAccuracy' }})
    
