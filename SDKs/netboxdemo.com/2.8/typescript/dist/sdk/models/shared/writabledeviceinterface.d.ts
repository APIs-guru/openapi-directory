import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";
export declare enum WritableDeviceInterfaceModeEnum {
    Access = "access",
    Tagged = "tagged",
    TaggedAll = "tagged-all"
}
export declare enum WritableDeviceInterfaceTypeEnum {
    Virtual = "virtual",
    Lag = "lag",
    OneHundredbaseTx = "100base-tx",
    OneThousandbaseT = "1000base-t",
    Two5gbaseT = "2.5gbase-t",
    FivegbaseT = "5gbase-t",
    TengbaseT = "10gbase-t",
    TengbaseCx4 = "10gbase-cx4",
    OneThousandbaseXGbic = "1000base-x-gbic",
    OneThousandbaseXSfp = "1000base-x-sfp",
    TengbaseXSfpp = "10gbase-x-sfpp",
    TengbaseXXfp = "10gbase-x-xfp",
    TengbaseXXenpak = "10gbase-x-xenpak",
    TengbaseXX2 = "10gbase-x-x2",
    TwentyFivegbaseXSfp28 = "25gbase-x-sfp28",
    FortygbaseXQsfpp = "40gbase-x-qsfpp",
    FiftygbaseXSfp28 = "50gbase-x-sfp28",
    OneHundredgbaseXCfp = "100gbase-x-cfp",
    OneHundredgbaseXCfp2 = "100gbase-x-cfp2",
    TwoHundredgbaseXCfp2 = "200gbase-x-cfp2",
    OneHundredgbaseXCfp4 = "100gbase-x-cfp4",
    OneHundredgbaseXCpak = "100gbase-x-cpak",
    OneHundredgbaseXQsfp28 = "100gbase-x-qsfp28",
    TwoHundredgbaseXQsfp56 = "200gbase-x-qsfp56",
    FourHundredgbaseXQsfpdd = "400gbase-x-qsfpdd",
    FourHundredgbaseXOsfp = "400gbase-x-osfp",
    Ieee80211a = "ieee802.11a",
    Ieee80211g = "ieee802.11g",
    Ieee80211n = "ieee802.11n",
    Ieee80211ac = "ieee802.11ac",
    Ieee80211ad = "ieee802.11ad",
    Ieee80211ax = "ieee802.11ax",
    Gsm = "gsm",
    Cdma = "cdma",
    Lte = "lte",
    SonetOc3 = "sonet-oc3",
    SonetOc12 = "sonet-oc12",
    SonetOc48 = "sonet-oc48",
    SonetOc192 = "sonet-oc192",
    SonetOc768 = "sonet-oc768",
    SonetOc1920 = "sonet-oc1920",
    SonetOc3840 = "sonet-oc3840",
    OnegfcSfp = "1gfc-sfp",
    TwogfcSfp = "2gfc-sfp",
    FourgfcSfp = "4gfc-sfp",
    EightgfcSfpp = "8gfc-sfpp",
    SixteengfcSfpp = "16gfc-sfpp",
    ThirtyTwogfcSfp28 = "32gfc-sfp28",
    OneHundredAndTwentyEightgfcSfp28 = "128gfc-sfp28",
    InfinibandSdr = "infiniband-sdr",
    InfinibandDdr = "infiniband-ddr",
    InfinibandQdr = "infiniband-qdr",
    InfinibandFdr10 = "infiniband-fdr10",
    InfinibandFdr = "infiniband-fdr",
    InfinibandEdr = "infiniband-edr",
    InfinibandHdr = "infiniband-hdr",
    InfinibandNdr = "infiniband-ndr",
    InfinibandXdr = "infiniband-xdr",
    T1 = "t1",
    E1 = "e1",
    T3 = "t3",
    E3 = "e3",
    CiscoStackwise = "cisco-stackwise",
    CiscoStackwisePlus = "cisco-stackwise-plus",
    CiscoFlexstack = "cisco-flexstack",
    CiscoFlexstackPlus = "cisco-flexstack-plus",
    JuniperVcp = "juniper-vcp",
    ExtremeSummitstack = "extreme-summitstack",
    ExtremeSummitstack128 = "extreme-summitstack-128",
    ExtremeSummitstack256 = "extreme-summitstack-256",
    ExtremeSummitstack512 = "extreme-summitstack-512",
    Other = "other"
}
export declare class WritableDeviceInterfaceInput extends SpeakeasyBase {
    cable?: NestedCableInput;
    connectionStatus?: boolean;
    description?: string;
    device: number;
    enabled?: boolean;
    lag?: number;
    macAddress?: string;
    mgmtOnly?: boolean;
    mode?: WritableDeviceInterfaceModeEnum;
    mtu?: number;
    name: string;
    taggedVlans?: number[];
    tags?: string[];
    type: WritableDeviceInterfaceTypeEnum;
    untaggedVlan?: number;
}
