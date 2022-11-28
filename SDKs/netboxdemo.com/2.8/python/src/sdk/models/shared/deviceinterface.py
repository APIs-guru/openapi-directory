from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceInterfaceConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class DeviceInterfaceConnectionStatus:
    label: DeviceInterfaceConnectionStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class DeviceInterfaceModeLabelEnum(str, Enum):
    ACCESS = "Access"
    TAGGED = "Tagged"
    TAGGED_ALL_ = "Tagged (All)"

class DeviceInterfaceModeValueEnum(str, Enum):
    ACCESS = "access"
    TAGGED = "tagged"
    TAGGED_ALL = "tagged-all"


@dataclass_json
@dataclass
class DeviceInterfaceMode:
    label: DeviceInterfaceModeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: DeviceInterfaceModeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class DeviceInterfaceTypeLabelEnum(str, Enum):
    VIRTUAL = "Virtual"
    LINK_AGGREGATION_GROUP_LAG_ = "Link Aggregation Group (LAG)"
    ONE_HUNDRED_BASE_TX_10_100_ME_ = "100BASE-TX (10/100ME)"
    ONE_THOUSAND_BASE_T_1_GE_ = "1000BASE-T (1GE)"
    TWO_5_GBASE_T_2_5_GE_ = "2.5GBASE-T (2.5GE)"
    FIVE_GBASE_T_5_GE_ = "5GBASE-T (5GE)"
    TEN_GBASE_T_10_GE_ = "10GBASE-T (10GE)"
    TEN_GBASE_CX4_10_GE_ = "10GBASE-CX4 (10GE)"
    GBIC_1_GE_ = "GBIC (1GE)"
    SFP_1_GE_ = "SFP (1GE)"
    SFP_PLUS_10_GE_ = "SFP+ (10GE)"
    XFP_10_GE_ = "XFP (10GE)"
    XENPAK_10_GE_ = "XENPAK (10GE)"
    X2_10_GE_ = "X2 (10GE)"
    SFP28_25_GE_ = "SFP28 (25GE)"
    QSFP_PLUS_40_GE_ = "QSFP+ (40GE)"
    QSFP28_50_GE_ = "QSFP28 (50GE)"
    CFP_100_GE_ = "CFP (100GE)"
    CFP2_100_GE_ = "CFP2 (100GE)"
    CFP2_200_GE_ = "CFP2 (200GE)"
    CFP4_100_GE_ = "CFP4 (100GE)"
    CISCO_CPAK_100_GE_ = "Cisco CPAK (100GE)"
    QSFP28_100_GE_ = "QSFP28 (100GE)"
    QSFP56_200_GE_ = "QSFP56 (200GE)"
    QSFP_DD_400_GE_ = "QSFP-DD (400GE)"
    OSFP_400_GE_ = "OSFP (400GE)"
    IEEE_802_11A = "IEEE 802.11a"
    IEEE_802_11B_G = "IEEE 802.11b/g"
    IEEE_802_11N = "IEEE 802.11n"
    IEEE_802_11AC = "IEEE 802.11ac"
    IEEE_802_11AD = "IEEE 802.11ad"
    IEEE_802_11AX = "IEEE 802.11ax"
    GSM = "GSM"
    CDMA = "CDMA"
    LTE = "LTE"
    OC_3_STM_1 = "OC-3/STM-1"
    OC_12_STM_4 = "OC-12/STM-4"
    OC_48_STM_16 = "OC-48/STM-16"
    OC_192_STM_64 = "OC-192/STM-64"
    OC_768_STM_256 = "OC-768/STM-256"
    OC_1920_STM_640 = "OC-1920/STM-640"
    OC_3840_STM_1234 = "OC-3840/STM-1234"
    SFP_1_GFC_ = "SFP (1GFC)"
    SFP_2_GFC_ = "SFP (2GFC)"
    SFP_4_GFC_ = "SFP (4GFC)"
    SFP_PLUS_8_GFC_ = "SFP+ (8GFC)"
    SFP_PLUS_16_GFC_ = "SFP+ (16GFC)"
    SFP28_32_GFC_ = "SFP28 (32GFC)"
    QSFP28_128_GFC_ = "QSFP28 (128GFC)"
    SDR_2_GBPS_ = "SDR (2 Gbps)"
    DDR_4_GBPS_ = "DDR (4 Gbps)"
    QDR_8_GBPS_ = "QDR (8 Gbps)"
    FDR10_10_GBPS_ = "FDR10 (10 Gbps)"
    FDR_13_5_GBPS_ = "FDR (13.5 Gbps)"
    EDR_25_GBPS_ = "EDR (25 Gbps)"
    HDR_50_GBPS_ = "HDR (50 Gbps)"
    NDR_100_GBPS_ = "NDR (100 Gbps)"
    XDR_250_GBPS_ = "XDR (250 Gbps)"
    T1_1_544_MBPS_ = "T1 (1.544 Mbps)"
    E1_2_048_MBPS_ = "E1 (2.048 Mbps)"
    T3_45_MBPS_ = "T3 (45 Mbps)"
    E3_34_MBPS_ = "E3 (34 Mbps)"
    CISCO_STACK_WISE = "Cisco StackWise"
    CISCO_STACK_WISE_PLUS = "Cisco StackWise Plus"
    CISCO_FLEX_STACK = "Cisco FlexStack"
    CISCO_FLEX_STACK_PLUS = "Cisco FlexStack Plus"
    JUNIPER_VCP = "Juniper VCP"
    EXTREME_SUMMIT_STACK = "Extreme SummitStack"
    EXTREME_SUMMIT_STACK_128 = "Extreme SummitStack-128"
    EXTREME_SUMMIT_STACK_256 = "Extreme SummitStack-256"
    EXTREME_SUMMIT_STACK_512 = "Extreme SummitStack-512"
    OTHER = "Other"

class DeviceInterfaceTypeValueEnum(str, Enum):
    VIRTUAL = "virtual"
    LAG = "lag"
    ONE_HUNDREDBASE_TX = "100base-tx"
    ONE_THOUSANDBASE_T = "1000base-t"
    TWO_5GBASE_T = "2.5gbase-t"
    FIVEGBASE_T = "5gbase-t"
    TENGBASE_T = "10gbase-t"
    TENGBASE_CX4 = "10gbase-cx4"
    ONE_THOUSANDBASE_X_GBIC = "1000base-x-gbic"
    ONE_THOUSANDBASE_X_SFP = "1000base-x-sfp"
    TENGBASE_X_SFPP = "10gbase-x-sfpp"
    TENGBASE_X_XFP = "10gbase-x-xfp"
    TENGBASE_X_XENPAK = "10gbase-x-xenpak"
    TENGBASE_X_X2 = "10gbase-x-x2"
    TWENTY_FIVEGBASE_X_SFP28 = "25gbase-x-sfp28"
    FORTYGBASE_X_QSFPP = "40gbase-x-qsfpp"
    FIFTYGBASE_X_SFP28 = "50gbase-x-sfp28"
    ONE_HUNDREDGBASE_X_CFP = "100gbase-x-cfp"
    ONE_HUNDREDGBASE_X_CFP2 = "100gbase-x-cfp2"
    TWO_HUNDREDGBASE_X_CFP2 = "200gbase-x-cfp2"
    ONE_HUNDREDGBASE_X_CFP4 = "100gbase-x-cfp4"
    ONE_HUNDREDGBASE_X_CPAK = "100gbase-x-cpak"
    ONE_HUNDREDGBASE_X_QSFP28 = "100gbase-x-qsfp28"
    TWO_HUNDREDGBASE_X_QSFP56 = "200gbase-x-qsfp56"
    FOUR_HUNDREDGBASE_X_QSFPDD = "400gbase-x-qsfpdd"
    FOUR_HUNDREDGBASE_X_OSFP = "400gbase-x-osfp"
    IEEE802_11A = "ieee802.11a"
    IEEE802_11G = "ieee802.11g"
    IEEE802_11N = "ieee802.11n"
    IEEE802_11AC = "ieee802.11ac"
    IEEE802_11AD = "ieee802.11ad"
    IEEE802_11AX = "ieee802.11ax"
    GSM = "gsm"
    CDMA = "cdma"
    LTE = "lte"
    SONET_OC3 = "sonet-oc3"
    SONET_OC12 = "sonet-oc12"
    SONET_OC48 = "sonet-oc48"
    SONET_OC192 = "sonet-oc192"
    SONET_OC768 = "sonet-oc768"
    SONET_OC1920 = "sonet-oc1920"
    SONET_OC3840 = "sonet-oc3840"
    ONEGFC_SFP = "1gfc-sfp"
    TWOGFC_SFP = "2gfc-sfp"
    FOURGFC_SFP = "4gfc-sfp"
    EIGHTGFC_SFPP = "8gfc-sfpp"
    SIXTEENGFC_SFPP = "16gfc-sfpp"
    THIRTY_TWOGFC_SFP28 = "32gfc-sfp28"
    ONE_HUNDRED_AND_TWENTY_EIGHTGFC_SFP28 = "128gfc-sfp28"
    INFINIBAND_SDR = "infiniband-sdr"
    INFINIBAND_DDR = "infiniband-ddr"
    INFINIBAND_QDR = "infiniband-qdr"
    INFINIBAND_FDR10 = "infiniband-fdr10"
    INFINIBAND_FDR = "infiniband-fdr"
    INFINIBAND_EDR = "infiniband-edr"
    INFINIBAND_HDR = "infiniband-hdr"
    INFINIBAND_NDR = "infiniband-ndr"
    INFINIBAND_XDR = "infiniband-xdr"
    T1 = "t1"
    E1 = "e1"
    T3 = "t3"
    E3 = "e3"
    CISCO_STACKWISE = "cisco-stackwise"
    CISCO_STACKWISE_PLUS = "cisco-stackwise-plus"
    CISCO_FLEXSTACK = "cisco-flexstack"
    CISCO_FLEXSTACK_PLUS = "cisco-flexstack-plus"
    JUNIPER_VCP = "juniper-vcp"
    EXTREME_SUMMITSTACK = "extreme-summitstack"
    EXTREME_SUMMITSTACK_128 = "extreme-summitstack-128"
    EXTREME_SUMMITSTACK_256 = "extreme-summitstack-256"
    EXTREME_SUMMITSTACK_512 = "extreme-summitstack-512"
    OTHER = "other"


@dataclass_json
@dataclass
class DeviceInterfaceType:
    label: DeviceInterfaceTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: DeviceInterfaceTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class DeviceInterface:
    device: NestedDevice = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: DeviceInterfaceType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    cable: Optional[NestedCable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint') }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint_type') }})
    connection_status: Optional[DeviceInterfaceConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    count_ipaddresses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_ipaddresses') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lag: Optional[NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lag') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mgmt_only') }})
    mode: Optional[DeviceInterfaceMode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[List[NestedVlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    untagged_vlan: Optional[NestedVlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
