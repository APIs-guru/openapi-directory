from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SasPortalDeviceAirInterfaceRadioTechnologyEnum(str, Enum):
    RADIO_TECHNOLOGY_UNSPECIFIED = "RADIO_TECHNOLOGY_UNSPECIFIED"
    E_UTRA = "E_UTRA"
    CAMBIUM_NETWORKS = "CAMBIUM_NETWORKS"
    FOUR_G_BBW_SAA_1 = "FOUR_G_BBW_SAA_1"
    NR = "NR"
    DOODLE_CBRS = "DOODLE_CBRS"
    CW = "CW"
    REDLINE = "REDLINE"
    TARANA_WIRELESS = "TARANA_WIRELESS"


@dataclass_json
@dataclass
class SasPortalDeviceAirInterface:
    radio_technology: Optional[SasPortalDeviceAirInterfaceRadioTechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radioTechnology' }})
    supported_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedSpec' }})
    
