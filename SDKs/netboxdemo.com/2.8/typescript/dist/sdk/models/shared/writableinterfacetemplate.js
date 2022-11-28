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
export var WritableInterfaceTemplateTypeEnum;
(function (WritableInterfaceTemplateTypeEnum) {
    WritableInterfaceTemplateTypeEnum["Virtual"] = "virtual";
    WritableInterfaceTemplateTypeEnum["Lag"] = "lag";
    WritableInterfaceTemplateTypeEnum["OneHundredbaseTx"] = "100base-tx";
    WritableInterfaceTemplateTypeEnum["OneThousandbaseT"] = "1000base-t";
    WritableInterfaceTemplateTypeEnum["Two5gbaseT"] = "2.5gbase-t";
    WritableInterfaceTemplateTypeEnum["FivegbaseT"] = "5gbase-t";
    WritableInterfaceTemplateTypeEnum["TengbaseT"] = "10gbase-t";
    WritableInterfaceTemplateTypeEnum["TengbaseCx4"] = "10gbase-cx4";
    WritableInterfaceTemplateTypeEnum["OneThousandbaseXGbic"] = "1000base-x-gbic";
    WritableInterfaceTemplateTypeEnum["OneThousandbaseXSfp"] = "1000base-x-sfp";
    WritableInterfaceTemplateTypeEnum["TengbaseXSfpp"] = "10gbase-x-sfpp";
    WritableInterfaceTemplateTypeEnum["TengbaseXXfp"] = "10gbase-x-xfp";
    WritableInterfaceTemplateTypeEnum["TengbaseXXenpak"] = "10gbase-x-xenpak";
    WritableInterfaceTemplateTypeEnum["TengbaseXX2"] = "10gbase-x-x2";
    WritableInterfaceTemplateTypeEnum["TwentyFivegbaseXSfp28"] = "25gbase-x-sfp28";
    WritableInterfaceTemplateTypeEnum["FortygbaseXQsfpp"] = "40gbase-x-qsfpp";
    WritableInterfaceTemplateTypeEnum["FiftygbaseXSfp28"] = "50gbase-x-sfp28";
    WritableInterfaceTemplateTypeEnum["OneHundredgbaseXCfp"] = "100gbase-x-cfp";
    WritableInterfaceTemplateTypeEnum["OneHundredgbaseXCfp2"] = "100gbase-x-cfp2";
    WritableInterfaceTemplateTypeEnum["TwoHundredgbaseXCfp2"] = "200gbase-x-cfp2";
    WritableInterfaceTemplateTypeEnum["OneHundredgbaseXCfp4"] = "100gbase-x-cfp4";
    WritableInterfaceTemplateTypeEnum["OneHundredgbaseXCpak"] = "100gbase-x-cpak";
    WritableInterfaceTemplateTypeEnum["OneHundredgbaseXQsfp28"] = "100gbase-x-qsfp28";
    WritableInterfaceTemplateTypeEnum["TwoHundredgbaseXQsfp56"] = "200gbase-x-qsfp56";
    WritableInterfaceTemplateTypeEnum["FourHundredgbaseXQsfpdd"] = "400gbase-x-qsfpdd";
    WritableInterfaceTemplateTypeEnum["FourHundredgbaseXOsfp"] = "400gbase-x-osfp";
    WritableInterfaceTemplateTypeEnum["Ieee80211a"] = "ieee802.11a";
    WritableInterfaceTemplateTypeEnum["Ieee80211g"] = "ieee802.11g";
    WritableInterfaceTemplateTypeEnum["Ieee80211n"] = "ieee802.11n";
    WritableInterfaceTemplateTypeEnum["Ieee80211ac"] = "ieee802.11ac";
    WritableInterfaceTemplateTypeEnum["Ieee80211ad"] = "ieee802.11ad";
    WritableInterfaceTemplateTypeEnum["Ieee80211ax"] = "ieee802.11ax";
    WritableInterfaceTemplateTypeEnum["Gsm"] = "gsm";
    WritableInterfaceTemplateTypeEnum["Cdma"] = "cdma";
    WritableInterfaceTemplateTypeEnum["Lte"] = "lte";
    WritableInterfaceTemplateTypeEnum["SonetOc3"] = "sonet-oc3";
    WritableInterfaceTemplateTypeEnum["SonetOc12"] = "sonet-oc12";
    WritableInterfaceTemplateTypeEnum["SonetOc48"] = "sonet-oc48";
    WritableInterfaceTemplateTypeEnum["SonetOc192"] = "sonet-oc192";
    WritableInterfaceTemplateTypeEnum["SonetOc768"] = "sonet-oc768";
    WritableInterfaceTemplateTypeEnum["SonetOc1920"] = "sonet-oc1920";
    WritableInterfaceTemplateTypeEnum["SonetOc3840"] = "sonet-oc3840";
    WritableInterfaceTemplateTypeEnum["OnegfcSfp"] = "1gfc-sfp";
    WritableInterfaceTemplateTypeEnum["TwogfcSfp"] = "2gfc-sfp";
    WritableInterfaceTemplateTypeEnum["FourgfcSfp"] = "4gfc-sfp";
    WritableInterfaceTemplateTypeEnum["EightgfcSfpp"] = "8gfc-sfpp";
    WritableInterfaceTemplateTypeEnum["SixteengfcSfpp"] = "16gfc-sfpp";
    WritableInterfaceTemplateTypeEnum["ThirtyTwogfcSfp28"] = "32gfc-sfp28";
    WritableInterfaceTemplateTypeEnum["OneHundredAndTwentyEightgfcSfp28"] = "128gfc-sfp28";
    WritableInterfaceTemplateTypeEnum["InfinibandSdr"] = "infiniband-sdr";
    WritableInterfaceTemplateTypeEnum["InfinibandDdr"] = "infiniband-ddr";
    WritableInterfaceTemplateTypeEnum["InfinibandQdr"] = "infiniband-qdr";
    WritableInterfaceTemplateTypeEnum["InfinibandFdr10"] = "infiniband-fdr10";
    WritableInterfaceTemplateTypeEnum["InfinibandFdr"] = "infiniband-fdr";
    WritableInterfaceTemplateTypeEnum["InfinibandEdr"] = "infiniband-edr";
    WritableInterfaceTemplateTypeEnum["InfinibandHdr"] = "infiniband-hdr";
    WritableInterfaceTemplateTypeEnum["InfinibandNdr"] = "infiniband-ndr";
    WritableInterfaceTemplateTypeEnum["InfinibandXdr"] = "infiniband-xdr";
    WritableInterfaceTemplateTypeEnum["T1"] = "t1";
    WritableInterfaceTemplateTypeEnum["E1"] = "e1";
    WritableInterfaceTemplateTypeEnum["T3"] = "t3";
    WritableInterfaceTemplateTypeEnum["E3"] = "e3";
    WritableInterfaceTemplateTypeEnum["CiscoStackwise"] = "cisco-stackwise";
    WritableInterfaceTemplateTypeEnum["CiscoStackwisePlus"] = "cisco-stackwise-plus";
    WritableInterfaceTemplateTypeEnum["CiscoFlexstack"] = "cisco-flexstack";
    WritableInterfaceTemplateTypeEnum["CiscoFlexstackPlus"] = "cisco-flexstack-plus";
    WritableInterfaceTemplateTypeEnum["JuniperVcp"] = "juniper-vcp";
    WritableInterfaceTemplateTypeEnum["ExtremeSummitstack"] = "extreme-summitstack";
    WritableInterfaceTemplateTypeEnum["ExtremeSummitstack128"] = "extreme-summitstack-128";
    WritableInterfaceTemplateTypeEnum["ExtremeSummitstack256"] = "extreme-summitstack-256";
    WritableInterfaceTemplateTypeEnum["ExtremeSummitstack512"] = "extreme-summitstack-512";
    WritableInterfaceTemplateTypeEnum["Other"] = "other";
})(WritableInterfaceTemplateTypeEnum || (WritableInterfaceTemplateTypeEnum = {}));
var WritableInterfaceTemplateInput = /** @class */ (function (_super) {
    __extends(WritableInterfaceTemplateInput, _super);
    function WritableInterfaceTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", Number)
    ], WritableInterfaceTemplateInput.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mgmt_only" }),
        __metadata("design:type", Boolean)
    ], WritableInterfaceTemplateInput.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritableInterfaceTemplateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritableInterfaceTemplateInput.prototype, "type", void 0);
    return WritableInterfaceTemplateInput;
}(SpeakeasyBase));
export { WritableInterfaceTemplateInput };
