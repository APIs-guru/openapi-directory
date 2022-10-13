from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedcable
from . import nesteddevice
from . import nestedpowerport

class PowerOutletConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class PowerOutletConnectionStatusConnectionStatus:
    label: PowerOutletConnectionStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class PowerOutletFeedLegLabelEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"

class PowerOutletFeedLegValueEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"


@dataclass_json
@dataclass
class PowerOutletFeedLegFeedLeg:
    label: PowerOutletFeedLegLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerOutletFeedLegValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class PowerOutletTypeLabelEnum(str, Enum):
    C5 = "C5"
    C7 = "C7"
    C13 = "C13"
    C15 = "C15"
    C19 = "C19"
    P_PLUS_N_PLUS_E_4_H = "P+N+E 4H"
    P_PLUS_N_PLUS_E_6_H = "P+N+E 6H"
    P_PLUS_N_PLUS_E_9_H = "P+N+E 9H"
    TWO_P_PLUS_E_4_H = "2P+E 4H"
    TWO_P_PLUS_E_6_H = "2P+E 6H"
    TWO_P_PLUS_E_9_H = "2P+E 9H"
    THREE_P_PLUS_E_4_H = "3P+E 4H"
    THREE_P_PLUS_E_6_H = "3P+E 6H"
    THREE_P_PLUS_E_9_H = "3P+E 9H"
    THREE_P_PLUS_N_PLUS_E_4_H = "3P+N+E 4H"
    THREE_P_PLUS_N_PLUS_E_6_H = "3P+N+E 6H"
    THREE_P_PLUS_N_PLUS_E_9_H = "3P+N+E 9H"
    NEMA_1_15_R = "NEMA 1-15R"
    NEMA_5_15_R = "NEMA 5-15R"
    NEMA_5_20_R = "NEMA 5-20R"
    NEMA_5_30_R = "NEMA 5-30R"
    NEMA_5_50_R = "NEMA 5-50R"
    NEMA_6_15_R = "NEMA 6-15R"
    NEMA_6_20_R = "NEMA 6-20R"
    NEMA_6_30_R = "NEMA 6-30R"
    NEMA_6_50_R = "NEMA 6-50R"
    NEMA_10_30_R = "NEMA 10-30R"
    NEMA_10_50_R = "NEMA 10-50R"
    NEMA_14_20_R = "NEMA 14-20R"
    NEMA_14_30_R = "NEMA 14-30R"
    NEMA_14_50_R = "NEMA 14-50R"
    NEMA_14_60_R = "NEMA 14-60R"
    NEMA_L1_15_R = "NEMA L1-15R"
    NEMA_L5_15_R = "NEMA L5-15R"
    NEMA_L5_20_R = "NEMA L5-20R"
    NEMA_L5_30_R = "NEMA L5-30R"
    NEMA_L5_50_R = "NEMA L5-50R"
    NEMA_L6_15_R = "NEMA L6-15R"
    NEMA_L6_20_R = "NEMA L6-20R"
    NEMA_L6_30_R = "NEMA L6-30R"
    NEMA_L6_50_R = "NEMA L6-50R"
    NEMA_L10_30_R = "NEMA L10-30R"
    NEMA_L14_20_R = "NEMA L14-20R"
    NEMA_L14_30_R = "NEMA L14-30R"
    NEMA_L14_50_R = "NEMA L14-50R"
    NEMA_L14_60_R = "NEMA L14-60R"
    NEMA_L21_20_R = "NEMA L21-20R"
    NEMA_L21_30_R = "NEMA L21-30R"
    CS6360_C = "CS6360C"
    CS6364_C = "CS6364C"
    CS8164_C = "CS8164C"
    CS8264_C = "CS8264C"
    CS8364_C = "CS8364C"
    CS8464_C = "CS8464C"
    ITA_TYPE_E_CEE7_5_ = "ITA Type E (CEE7/5)"
    ITA_TYPE_F_CEE7_3_ = "ITA Type F (CEE7/3)"
    ITA_TYPE_G_BS_1363_ = "ITA Type G (BS 1363)"
    ITA_TYPE_H = "ITA Type H"
    ITA_TYPE_I = "ITA Type I"
    ITA_TYPE_J = "ITA Type J"
    ITA_TYPE_K = "ITA Type K"
    ITA_TYPE_L_CEI_23_50_ = "ITA Type L (CEI 23-50)"
    ITA_TYPE_M_BS_546_ = "ITA Type M (BS 546)"
    ITA_TYPE_N = "ITA Type N"
    ITA_TYPE_O = "ITA Type O"
    HDOT_CX = "HDOT Cx"

class PowerOutletTypeValueEnum(str, Enum):
    IEC_60320_C5 = "iec-60320-c5"
    IEC_60320_C7 = "iec-60320-c7"
    IEC_60320_C13 = "iec-60320-c13"
    IEC_60320_C15 = "iec-60320-c15"
    IEC_60320_C19 = "iec-60320-c19"
    IEC_60309_P_N_E_4H = "iec-60309-p-n-e-4h"
    IEC_60309_P_N_E_6H = "iec-60309-p-n-e-6h"
    IEC_60309_P_N_E_9H = "iec-60309-p-n-e-9h"
    IEC_60309_2P_E_4H = "iec-60309-2p-e-4h"
    IEC_60309_2P_E_6H = "iec-60309-2p-e-6h"
    IEC_60309_2P_E_9H = "iec-60309-2p-e-9h"
    IEC_60309_3P_E_4H = "iec-60309-3p-e-4h"
    IEC_60309_3P_E_6H = "iec-60309-3p-e-6h"
    IEC_60309_3P_E_9H = "iec-60309-3p-e-9h"
    IEC_60309_3P_N_E_4H = "iec-60309-3p-n-e-4h"
    IEC_60309_3P_N_E_6H = "iec-60309-3p-n-e-6h"
    IEC_60309_3P_N_E_9H = "iec-60309-3p-n-e-9h"
    NEMA_1_15R = "nema-1-15r"
    NEMA_5_15R = "nema-5-15r"
    NEMA_5_20R = "nema-5-20r"
    NEMA_5_30R = "nema-5-30r"
    NEMA_5_50R = "nema-5-50r"
    NEMA_6_15R = "nema-6-15r"
    NEMA_6_20R = "nema-6-20r"
    NEMA_6_30R = "nema-6-30r"
    NEMA_6_50R = "nema-6-50r"
    NEMA_10_30R = "nema-10-30r"
    NEMA_10_50R = "nema-10-50r"
    NEMA_14_20R = "nema-14-20r"
    NEMA_14_30R = "nema-14-30r"
    NEMA_14_50R = "nema-14-50r"
    NEMA_14_60R = "nema-14-60r"
    NEMA_L1_15R = "nema-l1-15r"
    NEMA_L5_15R = "nema-l5-15r"
    NEMA_L5_20R = "nema-l5-20r"
    NEMA_L5_30R = "nema-l5-30r"
    NEMA_L5_50R = "nema-l5-50r"
    NEMA_L6_15R = "nema-l6-15r"
    NEMA_L6_20R = "nema-l6-20r"
    NEMA_L6_30R = "nema-l6-30r"
    NEMA_L6_50R = "nema-l6-50r"
    NEMA_L10_30R = "nema-l10-30r"
    NEMA_L14_20R = "nema-l14-20r"
    NEMA_L14_30R = "nema-l14-30r"
    NEMA_L14_50R = "nema-l14-50r"
    NEMA_L14_60R = "nema-l14-60r"
    NEMA_L21_20R = "nema-l21-20r"
    NEMA_L21_30R = "nema-l21-30r"
    CS6360_C = "CS6360C"
    CS6364_C = "CS6364C"
    CS8164_C = "CS8164C"
    CS8264_C = "CS8264C"
    CS8364_C = "CS8364C"
    CS8464_C = "CS8464C"
    ITA_E = "ita-e"
    ITA_F = "ita-f"
    ITA_G = "ita-g"
    ITA_H = "ita-h"
    ITA_I = "ita-i"
    ITA_J = "ita-j"
    ITA_K = "ita-k"
    ITA_L = "ita-l"
    ITA_M = "ita-m"
    ITA_N = "ita-n"
    ITA_O = "ita-o"
    HDOT_CX = "hdot-cx"


@dataclass_json
@dataclass
class PowerOutletTypeType:
    label: PowerOutletTypeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerOutletTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PowerOutlet:
    cable: Optional[nestedcable.NestedCable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint' }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint_type' }})
    connection_status: Optional[PowerOutletConnectionStatusConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    feed_leg: Optional[PowerOutletFeedLegFeedLeg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed_leg' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    power_port: Optional[nestedpowerport.NestedPowerPort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power_port' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[PowerOutletTypeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
