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
import { NestedCableInput } from "./nestedcable";
export var WritableDeviceInterfaceModeEnum;
(function (WritableDeviceInterfaceModeEnum) {
    WritableDeviceInterfaceModeEnum["Access"] = "access";
    WritableDeviceInterfaceModeEnum["Tagged"] = "tagged";
    WritableDeviceInterfaceModeEnum["TaggedAll"] = "tagged-all";
})(WritableDeviceInterfaceModeEnum || (WritableDeviceInterfaceModeEnum = {}));
export var WritableDeviceInterfaceTypeEnum;
(function (WritableDeviceInterfaceTypeEnum) {
    WritableDeviceInterfaceTypeEnum["Virtual"] = "virtual";
    WritableDeviceInterfaceTypeEnum["Lag"] = "lag";
    WritableDeviceInterfaceTypeEnum["OneHundredbaseTx"] = "100base-tx";
    WritableDeviceInterfaceTypeEnum["OneThousandbaseT"] = "1000base-t";
    WritableDeviceInterfaceTypeEnum["Two5gbaseT"] = "2.5gbase-t";
    WritableDeviceInterfaceTypeEnum["FivegbaseT"] = "5gbase-t";
    WritableDeviceInterfaceTypeEnum["TengbaseT"] = "10gbase-t";
    WritableDeviceInterfaceTypeEnum["TengbaseCx4"] = "10gbase-cx4";
    WritableDeviceInterfaceTypeEnum["OneThousandbaseXGbic"] = "1000base-x-gbic";
    WritableDeviceInterfaceTypeEnum["OneThousandbaseXSfp"] = "1000base-x-sfp";
    WritableDeviceInterfaceTypeEnum["TengbaseXSfpp"] = "10gbase-x-sfpp";
    WritableDeviceInterfaceTypeEnum["TengbaseXXfp"] = "10gbase-x-xfp";
    WritableDeviceInterfaceTypeEnum["TengbaseXXenpak"] = "10gbase-x-xenpak";
    WritableDeviceInterfaceTypeEnum["TengbaseXX2"] = "10gbase-x-x2";
    WritableDeviceInterfaceTypeEnum["TwentyFivegbaseXSfp28"] = "25gbase-x-sfp28";
    WritableDeviceInterfaceTypeEnum["FortygbaseXQsfpp"] = "40gbase-x-qsfpp";
    WritableDeviceInterfaceTypeEnum["FiftygbaseXSfp28"] = "50gbase-x-sfp28";
    WritableDeviceInterfaceTypeEnum["OneHundredgbaseXCfp"] = "100gbase-x-cfp";
    WritableDeviceInterfaceTypeEnum["OneHundredgbaseXCfp2"] = "100gbase-x-cfp2";
    WritableDeviceInterfaceTypeEnum["TwoHundredgbaseXCfp2"] = "200gbase-x-cfp2";
    WritableDeviceInterfaceTypeEnum["OneHundredgbaseXCfp4"] = "100gbase-x-cfp4";
    WritableDeviceInterfaceTypeEnum["OneHundredgbaseXCpak"] = "100gbase-x-cpak";
    WritableDeviceInterfaceTypeEnum["OneHundredgbaseXQsfp28"] = "100gbase-x-qsfp28";
    WritableDeviceInterfaceTypeEnum["TwoHundredgbaseXQsfp56"] = "200gbase-x-qsfp56";
    WritableDeviceInterfaceTypeEnum["FourHundredgbaseXQsfpdd"] = "400gbase-x-qsfpdd";
    WritableDeviceInterfaceTypeEnum["FourHundredgbaseXOsfp"] = "400gbase-x-osfp";
    WritableDeviceInterfaceTypeEnum["Ieee80211a"] = "ieee802.11a";
    WritableDeviceInterfaceTypeEnum["Ieee80211g"] = "ieee802.11g";
    WritableDeviceInterfaceTypeEnum["Ieee80211n"] = "ieee802.11n";
    WritableDeviceInterfaceTypeEnum["Ieee80211ac"] = "ieee802.11ac";
    WritableDeviceInterfaceTypeEnum["Ieee80211ad"] = "ieee802.11ad";
    WritableDeviceInterfaceTypeEnum["Ieee80211ax"] = "ieee802.11ax";
    WritableDeviceInterfaceTypeEnum["Gsm"] = "gsm";
    WritableDeviceInterfaceTypeEnum["Cdma"] = "cdma";
    WritableDeviceInterfaceTypeEnum["Lte"] = "lte";
    WritableDeviceInterfaceTypeEnum["SonetOc3"] = "sonet-oc3";
    WritableDeviceInterfaceTypeEnum["SonetOc12"] = "sonet-oc12";
    WritableDeviceInterfaceTypeEnum["SonetOc48"] = "sonet-oc48";
    WritableDeviceInterfaceTypeEnum["SonetOc192"] = "sonet-oc192";
    WritableDeviceInterfaceTypeEnum["SonetOc768"] = "sonet-oc768";
    WritableDeviceInterfaceTypeEnum["SonetOc1920"] = "sonet-oc1920";
    WritableDeviceInterfaceTypeEnum["SonetOc3840"] = "sonet-oc3840";
    WritableDeviceInterfaceTypeEnum["OnegfcSfp"] = "1gfc-sfp";
    WritableDeviceInterfaceTypeEnum["TwogfcSfp"] = "2gfc-sfp";
    WritableDeviceInterfaceTypeEnum["FourgfcSfp"] = "4gfc-sfp";
    WritableDeviceInterfaceTypeEnum["EightgfcSfpp"] = "8gfc-sfpp";
    WritableDeviceInterfaceTypeEnum["SixteengfcSfpp"] = "16gfc-sfpp";
    WritableDeviceInterfaceTypeEnum["ThirtyTwogfcSfp28"] = "32gfc-sfp28";
    WritableDeviceInterfaceTypeEnum["OneHundredAndTwentyEightgfcSfp28"] = "128gfc-sfp28";
    WritableDeviceInterfaceTypeEnum["InfinibandSdr"] = "infiniband-sdr";
    WritableDeviceInterfaceTypeEnum["InfinibandDdr"] = "infiniband-ddr";
    WritableDeviceInterfaceTypeEnum["InfinibandQdr"] = "infiniband-qdr";
    WritableDeviceInterfaceTypeEnum["InfinibandFdr10"] = "infiniband-fdr10";
    WritableDeviceInterfaceTypeEnum["InfinibandFdr"] = "infiniband-fdr";
    WritableDeviceInterfaceTypeEnum["InfinibandEdr"] = "infiniband-edr";
    WritableDeviceInterfaceTypeEnum["InfinibandHdr"] = "infiniband-hdr";
    WritableDeviceInterfaceTypeEnum["InfinibandNdr"] = "infiniband-ndr";
    WritableDeviceInterfaceTypeEnum["InfinibandXdr"] = "infiniband-xdr";
    WritableDeviceInterfaceTypeEnum["T1"] = "t1";
    WritableDeviceInterfaceTypeEnum["E1"] = "e1";
    WritableDeviceInterfaceTypeEnum["T3"] = "t3";
    WritableDeviceInterfaceTypeEnum["E3"] = "e3";
    WritableDeviceInterfaceTypeEnum["CiscoStackwise"] = "cisco-stackwise";
    WritableDeviceInterfaceTypeEnum["CiscoStackwisePlus"] = "cisco-stackwise-plus";
    WritableDeviceInterfaceTypeEnum["CiscoFlexstack"] = "cisco-flexstack";
    WritableDeviceInterfaceTypeEnum["CiscoFlexstackPlus"] = "cisco-flexstack-plus";
    WritableDeviceInterfaceTypeEnum["JuniperVcp"] = "juniper-vcp";
    WritableDeviceInterfaceTypeEnum["ExtremeSummitstack"] = "extreme-summitstack";
    WritableDeviceInterfaceTypeEnum["ExtremeSummitstack128"] = "extreme-summitstack-128";
    WritableDeviceInterfaceTypeEnum["ExtremeSummitstack256"] = "extreme-summitstack-256";
    WritableDeviceInterfaceTypeEnum["ExtremeSummitstack512"] = "extreme-summitstack-512";
    WritableDeviceInterfaceTypeEnum["Other"] = "other";
})(WritableDeviceInterfaceTypeEnum || (WritableDeviceInterfaceTypeEnum = {}));
var WritableDeviceInterfaceInput = /** @class */ (function (_super) {
    __extends(WritableDeviceInterfaceInput, _super);
    function WritableDeviceInterfaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCableInput)
    ], WritableDeviceInterfaceInput.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", Boolean)
    ], WritableDeviceInterfaceInput.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritableDeviceInterfaceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Number)
    ], WritableDeviceInterfaceInput.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], WritableDeviceInterfaceInput.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lag" }),
        __metadata("design:type", Number)
    ], WritableDeviceInterfaceInput.prototype, "lag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], WritableDeviceInterfaceInput.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mgmt_only" }),
        __metadata("design:type", Boolean)
    ], WritableDeviceInterfaceInput.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], WritableDeviceInterfaceInput.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], WritableDeviceInterfaceInput.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritableDeviceInterfaceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagged_vlans" }),
        __metadata("design:type", Array)
    ], WritableDeviceInterfaceInput.prototype, "taggedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritableDeviceInterfaceInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritableDeviceInterfaceInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=untagged_vlan" }),
        __metadata("design:type", Number)
    ], WritableDeviceInterfaceInput.prototype, "untaggedVlan", void 0);
    return WritableDeviceInterfaceInput;
}(SpeakeasyBase));
export { WritableDeviceInterfaceInput };
