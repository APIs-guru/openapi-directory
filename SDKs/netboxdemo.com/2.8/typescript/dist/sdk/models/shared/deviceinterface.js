var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
import { NestedInterface } from "./nestedinterface";
import { NestedVlan } from "./nestedvlan";
export var DeviceInterfaceConnectionStatusLabelEnum;
(function (DeviceInterfaceConnectionStatusLabelEnum) {
    DeviceInterfaceConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    DeviceInterfaceConnectionStatusLabelEnum["Connected"] = "Connected";
})(DeviceInterfaceConnectionStatusLabelEnum || (DeviceInterfaceConnectionStatusLabelEnum = {}));
var DeviceInterfaceConnectionStatus = /** @class */ (function (_super) {
    __extends(DeviceInterfaceConnectionStatus, _super);
    function DeviceInterfaceConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceInterfaceConnectionStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], DeviceInterfaceConnectionStatus.prototype, "value", void 0);
    return DeviceInterfaceConnectionStatus;
}(SpeakeasyBase));
export { DeviceInterfaceConnectionStatus };
export var DeviceInterfaceModeLabelEnum;
(function (DeviceInterfaceModeLabelEnum) {
    DeviceInterfaceModeLabelEnum["Access"] = "Access";
    DeviceInterfaceModeLabelEnum["Tagged"] = "Tagged";
    DeviceInterfaceModeLabelEnum["TaggedAll"] = "Tagged (All)";
})(DeviceInterfaceModeLabelEnum || (DeviceInterfaceModeLabelEnum = {}));
export var DeviceInterfaceModeValueEnum;
(function (DeviceInterfaceModeValueEnum) {
    DeviceInterfaceModeValueEnum["Access"] = "access";
    DeviceInterfaceModeValueEnum["Tagged"] = "tagged";
    DeviceInterfaceModeValueEnum["TaggedAll"] = "tagged-all";
})(DeviceInterfaceModeValueEnum || (DeviceInterfaceModeValueEnum = {}));
var DeviceInterfaceMode = /** @class */ (function (_super) {
    __extends(DeviceInterfaceMode, _super);
    function DeviceInterfaceMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceInterfaceMode.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeviceInterfaceMode.prototype, "value", void 0);
    return DeviceInterfaceMode;
}(SpeakeasyBase));
export { DeviceInterfaceMode };
export var DeviceInterfaceTypeLabelEnum;
(function (DeviceInterfaceTypeLabelEnum) {
    DeviceInterfaceTypeLabelEnum["Virtual"] = "Virtual";
    DeviceInterfaceTypeLabelEnum["LinkAggregationGroupLag"] = "Link Aggregation Group (LAG)";
    DeviceInterfaceTypeLabelEnum["OneHundredBaseTx10100Me"] = "100BASE-TX (10/100ME)";
    DeviceInterfaceTypeLabelEnum["OneThousandBaseT1Ge"] = "1000BASE-T (1GE)";
    DeviceInterfaceTypeLabelEnum["Two5GbaseT25Ge"] = "2.5GBASE-T (2.5GE)";
    DeviceInterfaceTypeLabelEnum["FiveGbaseT5Ge"] = "5GBASE-T (5GE)";
    DeviceInterfaceTypeLabelEnum["TenGbaseT10Ge"] = "10GBASE-T (10GE)";
    DeviceInterfaceTypeLabelEnum["TenGbaseCx410Ge"] = "10GBASE-CX4 (10GE)";
    DeviceInterfaceTypeLabelEnum["Gbic1Ge"] = "GBIC (1GE)";
    DeviceInterfaceTypeLabelEnum["Sfp1Ge"] = "SFP (1GE)";
    DeviceInterfaceTypeLabelEnum["SfpPlus10Ge"] = "SFP+ (10GE)";
    DeviceInterfaceTypeLabelEnum["Xfp10Ge"] = "XFP (10GE)";
    DeviceInterfaceTypeLabelEnum["Xenpak10Ge"] = "XENPAK (10GE)";
    DeviceInterfaceTypeLabelEnum["X210Ge"] = "X2 (10GE)";
    DeviceInterfaceTypeLabelEnum["Sfp2825Ge"] = "SFP28 (25GE)";
    DeviceInterfaceTypeLabelEnum["QsfpPlus40Ge"] = "QSFP+ (40GE)";
    DeviceInterfaceTypeLabelEnum["Qsfp2850Ge"] = "QSFP28 (50GE)";
    DeviceInterfaceTypeLabelEnum["Cfp100Ge"] = "CFP (100GE)";
    DeviceInterfaceTypeLabelEnum["Cfp2100Ge"] = "CFP2 (100GE)";
    DeviceInterfaceTypeLabelEnum["Cfp2200Ge"] = "CFP2 (200GE)";
    DeviceInterfaceTypeLabelEnum["Cfp4100Ge"] = "CFP4 (100GE)";
    DeviceInterfaceTypeLabelEnum["CiscoCpak100Ge"] = "Cisco CPAK (100GE)";
    DeviceInterfaceTypeLabelEnum["Qsfp28100Ge"] = "QSFP28 (100GE)";
    DeviceInterfaceTypeLabelEnum["Qsfp56200Ge"] = "QSFP56 (200GE)";
    DeviceInterfaceTypeLabelEnum["QsfpDd400Ge"] = "QSFP-DD (400GE)";
    DeviceInterfaceTypeLabelEnum["Osfp400Ge"] = "OSFP (400GE)";
    DeviceInterfaceTypeLabelEnum["Ieee80211a"] = "IEEE 802.11a";
    DeviceInterfaceTypeLabelEnum["Ieee80211bG"] = "IEEE 802.11b/g";
    DeviceInterfaceTypeLabelEnum["Ieee80211n"] = "IEEE 802.11n";
    DeviceInterfaceTypeLabelEnum["Ieee80211ac"] = "IEEE 802.11ac";
    DeviceInterfaceTypeLabelEnum["Ieee80211ad"] = "IEEE 802.11ad";
    DeviceInterfaceTypeLabelEnum["Ieee80211ax"] = "IEEE 802.11ax";
    DeviceInterfaceTypeLabelEnum["Gsm"] = "GSM";
    DeviceInterfaceTypeLabelEnum["Cdma"] = "CDMA";
    DeviceInterfaceTypeLabelEnum["Lte"] = "LTE";
    DeviceInterfaceTypeLabelEnum["Oc3Stm1"] = "OC-3/STM-1";
    DeviceInterfaceTypeLabelEnum["Oc12Stm4"] = "OC-12/STM-4";
    DeviceInterfaceTypeLabelEnum["Oc48Stm16"] = "OC-48/STM-16";
    DeviceInterfaceTypeLabelEnum["Oc192Stm64"] = "OC-192/STM-64";
    DeviceInterfaceTypeLabelEnum["Oc768Stm256"] = "OC-768/STM-256";
    DeviceInterfaceTypeLabelEnum["Oc1920Stm640"] = "OC-1920/STM-640";
    DeviceInterfaceTypeLabelEnum["Oc3840Stm1234"] = "OC-3840/STM-1234";
    DeviceInterfaceTypeLabelEnum["Sfp1Gfc"] = "SFP (1GFC)";
    DeviceInterfaceTypeLabelEnum["Sfp2Gfc"] = "SFP (2GFC)";
    DeviceInterfaceTypeLabelEnum["Sfp4Gfc"] = "SFP (4GFC)";
    DeviceInterfaceTypeLabelEnum["SfpPlus8Gfc"] = "SFP+ (8GFC)";
    DeviceInterfaceTypeLabelEnum["SfpPlus16Gfc"] = "SFP+ (16GFC)";
    DeviceInterfaceTypeLabelEnum["Sfp2832Gfc"] = "SFP28 (32GFC)";
    DeviceInterfaceTypeLabelEnum["Qsfp28128Gfc"] = "QSFP28 (128GFC)";
    DeviceInterfaceTypeLabelEnum["Sdr2Gbps"] = "SDR (2 Gbps)";
    DeviceInterfaceTypeLabelEnum["Ddr4Gbps"] = "DDR (4 Gbps)";
    DeviceInterfaceTypeLabelEnum["Qdr8Gbps"] = "QDR (8 Gbps)";
    DeviceInterfaceTypeLabelEnum["Fdr1010Gbps"] = "FDR10 (10 Gbps)";
    DeviceInterfaceTypeLabelEnum["Fdr135Gbps"] = "FDR (13.5 Gbps)";
    DeviceInterfaceTypeLabelEnum["Edr25Gbps"] = "EDR (25 Gbps)";
    DeviceInterfaceTypeLabelEnum["Hdr50Gbps"] = "HDR (50 Gbps)";
    DeviceInterfaceTypeLabelEnum["Ndr100Gbps"] = "NDR (100 Gbps)";
    DeviceInterfaceTypeLabelEnum["Xdr250Gbps"] = "XDR (250 Gbps)";
    DeviceInterfaceTypeLabelEnum["T11544Mbps"] = "T1 (1.544 Mbps)";
    DeviceInterfaceTypeLabelEnum["E12048Mbps"] = "E1 (2.048 Mbps)";
    DeviceInterfaceTypeLabelEnum["T345Mbps"] = "T3 (45 Mbps)";
    DeviceInterfaceTypeLabelEnum["E334Mbps"] = "E3 (34 Mbps)";
    DeviceInterfaceTypeLabelEnum["CiscoStackWise"] = "Cisco StackWise";
    DeviceInterfaceTypeLabelEnum["CiscoStackWisePlus"] = "Cisco StackWise Plus";
    DeviceInterfaceTypeLabelEnum["CiscoFlexStack"] = "Cisco FlexStack";
    DeviceInterfaceTypeLabelEnum["CiscoFlexStackPlus"] = "Cisco FlexStack Plus";
    DeviceInterfaceTypeLabelEnum["JuniperVcp"] = "Juniper VCP";
    DeviceInterfaceTypeLabelEnum["ExtremeSummitStack"] = "Extreme SummitStack";
    DeviceInterfaceTypeLabelEnum["ExtremeSummitStack128"] = "Extreme SummitStack-128";
    DeviceInterfaceTypeLabelEnum["ExtremeSummitStack256"] = "Extreme SummitStack-256";
    DeviceInterfaceTypeLabelEnum["ExtremeSummitStack512"] = "Extreme SummitStack-512";
    DeviceInterfaceTypeLabelEnum["Other"] = "Other";
})(DeviceInterfaceTypeLabelEnum || (DeviceInterfaceTypeLabelEnum = {}));
export var DeviceInterfaceTypeValueEnum;
(function (DeviceInterfaceTypeValueEnum) {
    DeviceInterfaceTypeValueEnum["Virtual"] = "virtual";
    DeviceInterfaceTypeValueEnum["Lag"] = "lag";
    DeviceInterfaceTypeValueEnum["OneHundredbaseTx"] = "100base-tx";
    DeviceInterfaceTypeValueEnum["OneThousandbaseT"] = "1000base-t";
    DeviceInterfaceTypeValueEnum["Two5gbaseT"] = "2.5gbase-t";
    DeviceInterfaceTypeValueEnum["FivegbaseT"] = "5gbase-t";
    DeviceInterfaceTypeValueEnum["TengbaseT"] = "10gbase-t";
    DeviceInterfaceTypeValueEnum["TengbaseCx4"] = "10gbase-cx4";
    DeviceInterfaceTypeValueEnum["OneThousandbaseXGbic"] = "1000base-x-gbic";
    DeviceInterfaceTypeValueEnum["OneThousandbaseXSfp"] = "1000base-x-sfp";
    DeviceInterfaceTypeValueEnum["TengbaseXSfpp"] = "10gbase-x-sfpp";
    DeviceInterfaceTypeValueEnum["TengbaseXXfp"] = "10gbase-x-xfp";
    DeviceInterfaceTypeValueEnum["TengbaseXXenpak"] = "10gbase-x-xenpak";
    DeviceInterfaceTypeValueEnum["TengbaseXX2"] = "10gbase-x-x2";
    DeviceInterfaceTypeValueEnum["TwentyFivegbaseXSfp28"] = "25gbase-x-sfp28";
    DeviceInterfaceTypeValueEnum["FortygbaseXQsfpp"] = "40gbase-x-qsfpp";
    DeviceInterfaceTypeValueEnum["FiftygbaseXSfp28"] = "50gbase-x-sfp28";
    DeviceInterfaceTypeValueEnum["OneHundredgbaseXCfp"] = "100gbase-x-cfp";
    DeviceInterfaceTypeValueEnum["OneHundredgbaseXCfp2"] = "100gbase-x-cfp2";
    DeviceInterfaceTypeValueEnum["TwoHundredgbaseXCfp2"] = "200gbase-x-cfp2";
    DeviceInterfaceTypeValueEnum["OneHundredgbaseXCfp4"] = "100gbase-x-cfp4";
    DeviceInterfaceTypeValueEnum["OneHundredgbaseXCpak"] = "100gbase-x-cpak";
    DeviceInterfaceTypeValueEnum["OneHundredgbaseXQsfp28"] = "100gbase-x-qsfp28";
    DeviceInterfaceTypeValueEnum["TwoHundredgbaseXQsfp56"] = "200gbase-x-qsfp56";
    DeviceInterfaceTypeValueEnum["FourHundredgbaseXQsfpdd"] = "400gbase-x-qsfpdd";
    DeviceInterfaceTypeValueEnum["FourHundredgbaseXOsfp"] = "400gbase-x-osfp";
    DeviceInterfaceTypeValueEnum["Ieee80211a"] = "ieee802.11a";
    DeviceInterfaceTypeValueEnum["Ieee80211g"] = "ieee802.11g";
    DeviceInterfaceTypeValueEnum["Ieee80211n"] = "ieee802.11n";
    DeviceInterfaceTypeValueEnum["Ieee80211ac"] = "ieee802.11ac";
    DeviceInterfaceTypeValueEnum["Ieee80211ad"] = "ieee802.11ad";
    DeviceInterfaceTypeValueEnum["Ieee80211ax"] = "ieee802.11ax";
    DeviceInterfaceTypeValueEnum["Gsm"] = "gsm";
    DeviceInterfaceTypeValueEnum["Cdma"] = "cdma";
    DeviceInterfaceTypeValueEnum["Lte"] = "lte";
    DeviceInterfaceTypeValueEnum["SonetOc3"] = "sonet-oc3";
    DeviceInterfaceTypeValueEnum["SonetOc12"] = "sonet-oc12";
    DeviceInterfaceTypeValueEnum["SonetOc48"] = "sonet-oc48";
    DeviceInterfaceTypeValueEnum["SonetOc192"] = "sonet-oc192";
    DeviceInterfaceTypeValueEnum["SonetOc768"] = "sonet-oc768";
    DeviceInterfaceTypeValueEnum["SonetOc1920"] = "sonet-oc1920";
    DeviceInterfaceTypeValueEnum["SonetOc3840"] = "sonet-oc3840";
    DeviceInterfaceTypeValueEnum["OnegfcSfp"] = "1gfc-sfp";
    DeviceInterfaceTypeValueEnum["TwogfcSfp"] = "2gfc-sfp";
    DeviceInterfaceTypeValueEnum["FourgfcSfp"] = "4gfc-sfp";
    DeviceInterfaceTypeValueEnum["EightgfcSfpp"] = "8gfc-sfpp";
    DeviceInterfaceTypeValueEnum["SixteengfcSfpp"] = "16gfc-sfpp";
    DeviceInterfaceTypeValueEnum["ThirtyTwogfcSfp28"] = "32gfc-sfp28";
    DeviceInterfaceTypeValueEnum["OneHundredAndTwentyEightgfcSfp28"] = "128gfc-sfp28";
    DeviceInterfaceTypeValueEnum["InfinibandSdr"] = "infiniband-sdr";
    DeviceInterfaceTypeValueEnum["InfinibandDdr"] = "infiniband-ddr";
    DeviceInterfaceTypeValueEnum["InfinibandQdr"] = "infiniband-qdr";
    DeviceInterfaceTypeValueEnum["InfinibandFdr10"] = "infiniband-fdr10";
    DeviceInterfaceTypeValueEnum["InfinibandFdr"] = "infiniband-fdr";
    DeviceInterfaceTypeValueEnum["InfinibandEdr"] = "infiniband-edr";
    DeviceInterfaceTypeValueEnum["InfinibandHdr"] = "infiniband-hdr";
    DeviceInterfaceTypeValueEnum["InfinibandNdr"] = "infiniband-ndr";
    DeviceInterfaceTypeValueEnum["InfinibandXdr"] = "infiniband-xdr";
    DeviceInterfaceTypeValueEnum["T1"] = "t1";
    DeviceInterfaceTypeValueEnum["E1"] = "e1";
    DeviceInterfaceTypeValueEnum["T3"] = "t3";
    DeviceInterfaceTypeValueEnum["E3"] = "e3";
    DeviceInterfaceTypeValueEnum["CiscoStackwise"] = "cisco-stackwise";
    DeviceInterfaceTypeValueEnum["CiscoStackwisePlus"] = "cisco-stackwise-plus";
    DeviceInterfaceTypeValueEnum["CiscoFlexstack"] = "cisco-flexstack";
    DeviceInterfaceTypeValueEnum["CiscoFlexstackPlus"] = "cisco-flexstack-plus";
    DeviceInterfaceTypeValueEnum["JuniperVcp"] = "juniper-vcp";
    DeviceInterfaceTypeValueEnum["ExtremeSummitstack"] = "extreme-summitstack";
    DeviceInterfaceTypeValueEnum["ExtremeSummitstack128"] = "extreme-summitstack-128";
    DeviceInterfaceTypeValueEnum["ExtremeSummitstack256"] = "extreme-summitstack-256";
    DeviceInterfaceTypeValueEnum["ExtremeSummitstack512"] = "extreme-summitstack-512";
    DeviceInterfaceTypeValueEnum["Other"] = "other";
})(DeviceInterfaceTypeValueEnum || (DeviceInterfaceTypeValueEnum = {}));
var DeviceInterfaceType = /** @class */ (function (_super) {
    __extends(DeviceInterfaceType, _super);
    function DeviceInterfaceType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceInterfaceType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeviceInterfaceType.prototype, "value", void 0);
    return DeviceInterfaceType;
}(SpeakeasyBase));
export { DeviceInterfaceType };
var DeviceInterface = /** @class */ (function (_super) {
    __extends(DeviceInterface, _super);
    function DeviceInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCable)
    ], DeviceInterface.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint" }),
        __metadata("design:type", Map)
    ], DeviceInterface.prototype, "connectedEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" }),
        __metadata("design:type", String)
    ], DeviceInterface.prototype, "connectedEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", DeviceInterfaceConnectionStatus)
    ], DeviceInterface.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_ipaddresses" }),
        __metadata("design:type", Number)
    ], DeviceInterface.prototype, "countIpaddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DeviceInterface.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", NestedDevice)
    ], DeviceInterface.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], DeviceInterface.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeviceInterface.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lag" }),
        __metadata("design:type", NestedInterface)
    ], DeviceInterface.prototype, "lag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], DeviceInterface.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mgmt_only" }),
        __metadata("design:type", Boolean)
    ], DeviceInterface.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", DeviceInterfaceMode)
    ], DeviceInterface.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], DeviceInterface.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceInterface.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagged_vlans", elemType: NestedVlan }),
        __metadata("design:type", Array)
    ], DeviceInterface.prototype, "taggedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], DeviceInterface.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", DeviceInterfaceType)
    ], DeviceInterface.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=untagged_vlan" }),
        __metadata("design:type", NestedVlan)
    ], DeviceInterface.prototype, "untaggedVlan", void 0);
    return DeviceInterface;
}(SpeakeasyBase));
export { DeviceInterface };
