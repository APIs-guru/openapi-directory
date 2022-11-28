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
import { NestedDeviceType } from "./nesteddevicetype";
export var InterfaceTemplateTypeLabelEnum;
(function (InterfaceTemplateTypeLabelEnum) {
    InterfaceTemplateTypeLabelEnum["Virtual"] = "Virtual";
    InterfaceTemplateTypeLabelEnum["LinkAggregationGroupLag"] = "Link Aggregation Group (LAG)";
    InterfaceTemplateTypeLabelEnum["OneHundredBaseTx10100Me"] = "100BASE-TX (10/100ME)";
    InterfaceTemplateTypeLabelEnum["OneThousandBaseT1Ge"] = "1000BASE-T (1GE)";
    InterfaceTemplateTypeLabelEnum["Two5GbaseT25Ge"] = "2.5GBASE-T (2.5GE)";
    InterfaceTemplateTypeLabelEnum["FiveGbaseT5Ge"] = "5GBASE-T (5GE)";
    InterfaceTemplateTypeLabelEnum["TenGbaseT10Ge"] = "10GBASE-T (10GE)";
    InterfaceTemplateTypeLabelEnum["TenGbaseCx410Ge"] = "10GBASE-CX4 (10GE)";
    InterfaceTemplateTypeLabelEnum["Gbic1Ge"] = "GBIC (1GE)";
    InterfaceTemplateTypeLabelEnum["Sfp1Ge"] = "SFP (1GE)";
    InterfaceTemplateTypeLabelEnum["SfpPlus10Ge"] = "SFP+ (10GE)";
    InterfaceTemplateTypeLabelEnum["Xfp10Ge"] = "XFP (10GE)";
    InterfaceTemplateTypeLabelEnum["Xenpak10Ge"] = "XENPAK (10GE)";
    InterfaceTemplateTypeLabelEnum["X210Ge"] = "X2 (10GE)";
    InterfaceTemplateTypeLabelEnum["Sfp2825Ge"] = "SFP28 (25GE)";
    InterfaceTemplateTypeLabelEnum["QsfpPlus40Ge"] = "QSFP+ (40GE)";
    InterfaceTemplateTypeLabelEnum["Qsfp2850Ge"] = "QSFP28 (50GE)";
    InterfaceTemplateTypeLabelEnum["Cfp100Ge"] = "CFP (100GE)";
    InterfaceTemplateTypeLabelEnum["Cfp2100Ge"] = "CFP2 (100GE)";
    InterfaceTemplateTypeLabelEnum["Cfp2200Ge"] = "CFP2 (200GE)";
    InterfaceTemplateTypeLabelEnum["Cfp4100Ge"] = "CFP4 (100GE)";
    InterfaceTemplateTypeLabelEnum["CiscoCpak100Ge"] = "Cisco CPAK (100GE)";
    InterfaceTemplateTypeLabelEnum["Qsfp28100Ge"] = "QSFP28 (100GE)";
    InterfaceTemplateTypeLabelEnum["Qsfp56200Ge"] = "QSFP56 (200GE)";
    InterfaceTemplateTypeLabelEnum["QsfpDd400Ge"] = "QSFP-DD (400GE)";
    InterfaceTemplateTypeLabelEnum["Osfp400Ge"] = "OSFP (400GE)";
    InterfaceTemplateTypeLabelEnum["Ieee80211a"] = "IEEE 802.11a";
    InterfaceTemplateTypeLabelEnum["Ieee80211bG"] = "IEEE 802.11b/g";
    InterfaceTemplateTypeLabelEnum["Ieee80211n"] = "IEEE 802.11n";
    InterfaceTemplateTypeLabelEnum["Ieee80211ac"] = "IEEE 802.11ac";
    InterfaceTemplateTypeLabelEnum["Ieee80211ad"] = "IEEE 802.11ad";
    InterfaceTemplateTypeLabelEnum["Ieee80211ax"] = "IEEE 802.11ax";
    InterfaceTemplateTypeLabelEnum["Gsm"] = "GSM";
    InterfaceTemplateTypeLabelEnum["Cdma"] = "CDMA";
    InterfaceTemplateTypeLabelEnum["Lte"] = "LTE";
    InterfaceTemplateTypeLabelEnum["Oc3Stm1"] = "OC-3/STM-1";
    InterfaceTemplateTypeLabelEnum["Oc12Stm4"] = "OC-12/STM-4";
    InterfaceTemplateTypeLabelEnum["Oc48Stm16"] = "OC-48/STM-16";
    InterfaceTemplateTypeLabelEnum["Oc192Stm64"] = "OC-192/STM-64";
    InterfaceTemplateTypeLabelEnum["Oc768Stm256"] = "OC-768/STM-256";
    InterfaceTemplateTypeLabelEnum["Oc1920Stm640"] = "OC-1920/STM-640";
    InterfaceTemplateTypeLabelEnum["Oc3840Stm1234"] = "OC-3840/STM-1234";
    InterfaceTemplateTypeLabelEnum["Sfp1Gfc"] = "SFP (1GFC)";
    InterfaceTemplateTypeLabelEnum["Sfp2Gfc"] = "SFP (2GFC)";
    InterfaceTemplateTypeLabelEnum["Sfp4Gfc"] = "SFP (4GFC)";
    InterfaceTemplateTypeLabelEnum["SfpPlus8Gfc"] = "SFP+ (8GFC)";
    InterfaceTemplateTypeLabelEnum["SfpPlus16Gfc"] = "SFP+ (16GFC)";
    InterfaceTemplateTypeLabelEnum["Sfp2832Gfc"] = "SFP28 (32GFC)";
    InterfaceTemplateTypeLabelEnum["Qsfp28128Gfc"] = "QSFP28 (128GFC)";
    InterfaceTemplateTypeLabelEnum["Sdr2Gbps"] = "SDR (2 Gbps)";
    InterfaceTemplateTypeLabelEnum["Ddr4Gbps"] = "DDR (4 Gbps)";
    InterfaceTemplateTypeLabelEnum["Qdr8Gbps"] = "QDR (8 Gbps)";
    InterfaceTemplateTypeLabelEnum["Fdr1010Gbps"] = "FDR10 (10 Gbps)";
    InterfaceTemplateTypeLabelEnum["Fdr135Gbps"] = "FDR (13.5 Gbps)";
    InterfaceTemplateTypeLabelEnum["Edr25Gbps"] = "EDR (25 Gbps)";
    InterfaceTemplateTypeLabelEnum["Hdr50Gbps"] = "HDR (50 Gbps)";
    InterfaceTemplateTypeLabelEnum["Ndr100Gbps"] = "NDR (100 Gbps)";
    InterfaceTemplateTypeLabelEnum["Xdr250Gbps"] = "XDR (250 Gbps)";
    InterfaceTemplateTypeLabelEnum["T11544Mbps"] = "T1 (1.544 Mbps)";
    InterfaceTemplateTypeLabelEnum["E12048Mbps"] = "E1 (2.048 Mbps)";
    InterfaceTemplateTypeLabelEnum["T345Mbps"] = "T3 (45 Mbps)";
    InterfaceTemplateTypeLabelEnum["E334Mbps"] = "E3 (34 Mbps)";
    InterfaceTemplateTypeLabelEnum["CiscoStackWise"] = "Cisco StackWise";
    InterfaceTemplateTypeLabelEnum["CiscoStackWisePlus"] = "Cisco StackWise Plus";
    InterfaceTemplateTypeLabelEnum["CiscoFlexStack"] = "Cisco FlexStack";
    InterfaceTemplateTypeLabelEnum["CiscoFlexStackPlus"] = "Cisco FlexStack Plus";
    InterfaceTemplateTypeLabelEnum["JuniperVcp"] = "Juniper VCP";
    InterfaceTemplateTypeLabelEnum["ExtremeSummitStack"] = "Extreme SummitStack";
    InterfaceTemplateTypeLabelEnum["ExtremeSummitStack128"] = "Extreme SummitStack-128";
    InterfaceTemplateTypeLabelEnum["ExtremeSummitStack256"] = "Extreme SummitStack-256";
    InterfaceTemplateTypeLabelEnum["ExtremeSummitStack512"] = "Extreme SummitStack-512";
    InterfaceTemplateTypeLabelEnum["Other"] = "Other";
})(InterfaceTemplateTypeLabelEnum || (InterfaceTemplateTypeLabelEnum = {}));
export var InterfaceTemplateTypeValueEnum;
(function (InterfaceTemplateTypeValueEnum) {
    InterfaceTemplateTypeValueEnum["Virtual"] = "virtual";
    InterfaceTemplateTypeValueEnum["Lag"] = "lag";
    InterfaceTemplateTypeValueEnum["OneHundredbaseTx"] = "100base-tx";
    InterfaceTemplateTypeValueEnum["OneThousandbaseT"] = "1000base-t";
    InterfaceTemplateTypeValueEnum["Two5gbaseT"] = "2.5gbase-t";
    InterfaceTemplateTypeValueEnum["FivegbaseT"] = "5gbase-t";
    InterfaceTemplateTypeValueEnum["TengbaseT"] = "10gbase-t";
    InterfaceTemplateTypeValueEnum["TengbaseCx4"] = "10gbase-cx4";
    InterfaceTemplateTypeValueEnum["OneThousandbaseXGbic"] = "1000base-x-gbic";
    InterfaceTemplateTypeValueEnum["OneThousandbaseXSfp"] = "1000base-x-sfp";
    InterfaceTemplateTypeValueEnum["TengbaseXSfpp"] = "10gbase-x-sfpp";
    InterfaceTemplateTypeValueEnum["TengbaseXXfp"] = "10gbase-x-xfp";
    InterfaceTemplateTypeValueEnum["TengbaseXXenpak"] = "10gbase-x-xenpak";
    InterfaceTemplateTypeValueEnum["TengbaseXX2"] = "10gbase-x-x2";
    InterfaceTemplateTypeValueEnum["TwentyFivegbaseXSfp28"] = "25gbase-x-sfp28";
    InterfaceTemplateTypeValueEnum["FortygbaseXQsfpp"] = "40gbase-x-qsfpp";
    InterfaceTemplateTypeValueEnum["FiftygbaseXSfp28"] = "50gbase-x-sfp28";
    InterfaceTemplateTypeValueEnum["OneHundredgbaseXCfp"] = "100gbase-x-cfp";
    InterfaceTemplateTypeValueEnum["OneHundredgbaseXCfp2"] = "100gbase-x-cfp2";
    InterfaceTemplateTypeValueEnum["TwoHundredgbaseXCfp2"] = "200gbase-x-cfp2";
    InterfaceTemplateTypeValueEnum["OneHundredgbaseXCfp4"] = "100gbase-x-cfp4";
    InterfaceTemplateTypeValueEnum["OneHundredgbaseXCpak"] = "100gbase-x-cpak";
    InterfaceTemplateTypeValueEnum["OneHundredgbaseXQsfp28"] = "100gbase-x-qsfp28";
    InterfaceTemplateTypeValueEnum["TwoHundredgbaseXQsfp56"] = "200gbase-x-qsfp56";
    InterfaceTemplateTypeValueEnum["FourHundredgbaseXQsfpdd"] = "400gbase-x-qsfpdd";
    InterfaceTemplateTypeValueEnum["FourHundredgbaseXOsfp"] = "400gbase-x-osfp";
    InterfaceTemplateTypeValueEnum["Ieee80211a"] = "ieee802.11a";
    InterfaceTemplateTypeValueEnum["Ieee80211g"] = "ieee802.11g";
    InterfaceTemplateTypeValueEnum["Ieee80211n"] = "ieee802.11n";
    InterfaceTemplateTypeValueEnum["Ieee80211ac"] = "ieee802.11ac";
    InterfaceTemplateTypeValueEnum["Ieee80211ad"] = "ieee802.11ad";
    InterfaceTemplateTypeValueEnum["Ieee80211ax"] = "ieee802.11ax";
    InterfaceTemplateTypeValueEnum["Gsm"] = "gsm";
    InterfaceTemplateTypeValueEnum["Cdma"] = "cdma";
    InterfaceTemplateTypeValueEnum["Lte"] = "lte";
    InterfaceTemplateTypeValueEnum["SonetOc3"] = "sonet-oc3";
    InterfaceTemplateTypeValueEnum["SonetOc12"] = "sonet-oc12";
    InterfaceTemplateTypeValueEnum["SonetOc48"] = "sonet-oc48";
    InterfaceTemplateTypeValueEnum["SonetOc192"] = "sonet-oc192";
    InterfaceTemplateTypeValueEnum["SonetOc768"] = "sonet-oc768";
    InterfaceTemplateTypeValueEnum["SonetOc1920"] = "sonet-oc1920";
    InterfaceTemplateTypeValueEnum["SonetOc3840"] = "sonet-oc3840";
    InterfaceTemplateTypeValueEnum["OnegfcSfp"] = "1gfc-sfp";
    InterfaceTemplateTypeValueEnum["TwogfcSfp"] = "2gfc-sfp";
    InterfaceTemplateTypeValueEnum["FourgfcSfp"] = "4gfc-sfp";
    InterfaceTemplateTypeValueEnum["EightgfcSfpp"] = "8gfc-sfpp";
    InterfaceTemplateTypeValueEnum["SixteengfcSfpp"] = "16gfc-sfpp";
    InterfaceTemplateTypeValueEnum["ThirtyTwogfcSfp28"] = "32gfc-sfp28";
    InterfaceTemplateTypeValueEnum["OneHundredAndTwentyEightgfcSfp28"] = "128gfc-sfp28";
    InterfaceTemplateTypeValueEnum["InfinibandSdr"] = "infiniband-sdr";
    InterfaceTemplateTypeValueEnum["InfinibandDdr"] = "infiniband-ddr";
    InterfaceTemplateTypeValueEnum["InfinibandQdr"] = "infiniband-qdr";
    InterfaceTemplateTypeValueEnum["InfinibandFdr10"] = "infiniband-fdr10";
    InterfaceTemplateTypeValueEnum["InfinibandFdr"] = "infiniband-fdr";
    InterfaceTemplateTypeValueEnum["InfinibandEdr"] = "infiniband-edr";
    InterfaceTemplateTypeValueEnum["InfinibandHdr"] = "infiniband-hdr";
    InterfaceTemplateTypeValueEnum["InfinibandNdr"] = "infiniband-ndr";
    InterfaceTemplateTypeValueEnum["InfinibandXdr"] = "infiniband-xdr";
    InterfaceTemplateTypeValueEnum["T1"] = "t1";
    InterfaceTemplateTypeValueEnum["E1"] = "e1";
    InterfaceTemplateTypeValueEnum["T3"] = "t3";
    InterfaceTemplateTypeValueEnum["E3"] = "e3";
    InterfaceTemplateTypeValueEnum["CiscoStackwise"] = "cisco-stackwise";
    InterfaceTemplateTypeValueEnum["CiscoStackwisePlus"] = "cisco-stackwise-plus";
    InterfaceTemplateTypeValueEnum["CiscoFlexstack"] = "cisco-flexstack";
    InterfaceTemplateTypeValueEnum["CiscoFlexstackPlus"] = "cisco-flexstack-plus";
    InterfaceTemplateTypeValueEnum["JuniperVcp"] = "juniper-vcp";
    InterfaceTemplateTypeValueEnum["ExtremeSummitstack"] = "extreme-summitstack";
    InterfaceTemplateTypeValueEnum["ExtremeSummitstack128"] = "extreme-summitstack-128";
    InterfaceTemplateTypeValueEnum["ExtremeSummitstack256"] = "extreme-summitstack-256";
    InterfaceTemplateTypeValueEnum["ExtremeSummitstack512"] = "extreme-summitstack-512";
    InterfaceTemplateTypeValueEnum["Other"] = "other";
})(InterfaceTemplateTypeValueEnum || (InterfaceTemplateTypeValueEnum = {}));
var InterfaceTemplateType = /** @class */ (function (_super) {
    __extends(InterfaceTemplateType, _super);
    function InterfaceTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], InterfaceTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], InterfaceTemplateType.prototype, "value", void 0);
    return InterfaceTemplateType;
}(SpeakeasyBase));
export { InterfaceTemplateType };
var InterfaceTemplate = /** @class */ (function (_super) {
    __extends(InterfaceTemplate, _super);
    function InterfaceTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], InterfaceTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], InterfaceTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mgmt_only" }),
        __metadata("design:type", Boolean)
    ], InterfaceTemplate.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InterfaceTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", InterfaceTemplateType)
    ], InterfaceTemplate.prototype, "type", void 0);
    return InterfaceTemplate;
}(SpeakeasyBase));
export { InterfaceTemplate };
