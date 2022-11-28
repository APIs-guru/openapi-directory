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
export var WritableVirtualMachineInterfaceModeEnum;
(function (WritableVirtualMachineInterfaceModeEnum) {
    WritableVirtualMachineInterfaceModeEnum["Access"] = "access";
    WritableVirtualMachineInterfaceModeEnum["Tagged"] = "tagged";
    WritableVirtualMachineInterfaceModeEnum["TaggedAll"] = "tagged-all";
})(WritableVirtualMachineInterfaceModeEnum || (WritableVirtualMachineInterfaceModeEnum = {}));
export var WritableVirtualMachineInterfaceTypeEnum;
(function (WritableVirtualMachineInterfaceTypeEnum) {
    WritableVirtualMachineInterfaceTypeEnum["Virtual"] = "virtual";
    WritableVirtualMachineInterfaceTypeEnum["Lag"] = "lag";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredbaseTx"] = "100base-tx";
    WritableVirtualMachineInterfaceTypeEnum["OneThousandbaseT"] = "1000base-t";
    WritableVirtualMachineInterfaceTypeEnum["Two5gbaseT"] = "2.5gbase-t";
    WritableVirtualMachineInterfaceTypeEnum["FivegbaseT"] = "5gbase-t";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseT"] = "10gbase-t";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseCx4"] = "10gbase-cx4";
    WritableVirtualMachineInterfaceTypeEnum["OneThousandbaseXGbic"] = "1000base-x-gbic";
    WritableVirtualMachineInterfaceTypeEnum["OneThousandbaseXSfp"] = "1000base-x-sfp";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseXSfpp"] = "10gbase-x-sfpp";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseXXfp"] = "10gbase-x-xfp";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseXXenpak"] = "10gbase-x-xenpak";
    WritableVirtualMachineInterfaceTypeEnum["TengbaseXX2"] = "10gbase-x-x2";
    WritableVirtualMachineInterfaceTypeEnum["TwentyFivegbaseXSfp28"] = "25gbase-x-sfp28";
    WritableVirtualMachineInterfaceTypeEnum["FortygbaseXQsfpp"] = "40gbase-x-qsfpp";
    WritableVirtualMachineInterfaceTypeEnum["FiftygbaseXSfp28"] = "50gbase-x-sfp28";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredgbaseXCfp"] = "100gbase-x-cfp";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredgbaseXCfp2"] = "100gbase-x-cfp2";
    WritableVirtualMachineInterfaceTypeEnum["TwoHundredgbaseXCfp2"] = "200gbase-x-cfp2";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredgbaseXCfp4"] = "100gbase-x-cfp4";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredgbaseXCpak"] = "100gbase-x-cpak";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredgbaseXQsfp28"] = "100gbase-x-qsfp28";
    WritableVirtualMachineInterfaceTypeEnum["TwoHundredgbaseXQsfp56"] = "200gbase-x-qsfp56";
    WritableVirtualMachineInterfaceTypeEnum["FourHundredgbaseXQsfpdd"] = "400gbase-x-qsfpdd";
    WritableVirtualMachineInterfaceTypeEnum["FourHundredgbaseXOsfp"] = "400gbase-x-osfp";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211a"] = "ieee802.11a";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211g"] = "ieee802.11g";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211n"] = "ieee802.11n";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211ac"] = "ieee802.11ac";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211ad"] = "ieee802.11ad";
    WritableVirtualMachineInterfaceTypeEnum["Ieee80211ax"] = "ieee802.11ax";
    WritableVirtualMachineInterfaceTypeEnum["Gsm"] = "gsm";
    WritableVirtualMachineInterfaceTypeEnum["Cdma"] = "cdma";
    WritableVirtualMachineInterfaceTypeEnum["Lte"] = "lte";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc3"] = "sonet-oc3";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc12"] = "sonet-oc12";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc48"] = "sonet-oc48";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc192"] = "sonet-oc192";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc768"] = "sonet-oc768";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc1920"] = "sonet-oc1920";
    WritableVirtualMachineInterfaceTypeEnum["SonetOc3840"] = "sonet-oc3840";
    WritableVirtualMachineInterfaceTypeEnum["OnegfcSfp"] = "1gfc-sfp";
    WritableVirtualMachineInterfaceTypeEnum["TwogfcSfp"] = "2gfc-sfp";
    WritableVirtualMachineInterfaceTypeEnum["FourgfcSfp"] = "4gfc-sfp";
    WritableVirtualMachineInterfaceTypeEnum["EightgfcSfpp"] = "8gfc-sfpp";
    WritableVirtualMachineInterfaceTypeEnum["SixteengfcSfpp"] = "16gfc-sfpp";
    WritableVirtualMachineInterfaceTypeEnum["ThirtyTwogfcSfp28"] = "32gfc-sfp28";
    WritableVirtualMachineInterfaceTypeEnum["OneHundredAndTwentyEightgfcSfp28"] = "128gfc-sfp28";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandSdr"] = "infiniband-sdr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandDdr"] = "infiniband-ddr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandQdr"] = "infiniband-qdr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandFdr10"] = "infiniband-fdr10";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandFdr"] = "infiniband-fdr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandEdr"] = "infiniband-edr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandHdr"] = "infiniband-hdr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandNdr"] = "infiniband-ndr";
    WritableVirtualMachineInterfaceTypeEnum["InfinibandXdr"] = "infiniband-xdr";
    WritableVirtualMachineInterfaceTypeEnum["T1"] = "t1";
    WritableVirtualMachineInterfaceTypeEnum["E1"] = "e1";
    WritableVirtualMachineInterfaceTypeEnum["T3"] = "t3";
    WritableVirtualMachineInterfaceTypeEnum["E3"] = "e3";
    WritableVirtualMachineInterfaceTypeEnum["CiscoStackwise"] = "cisco-stackwise";
    WritableVirtualMachineInterfaceTypeEnum["CiscoStackwisePlus"] = "cisco-stackwise-plus";
    WritableVirtualMachineInterfaceTypeEnum["CiscoFlexstack"] = "cisco-flexstack";
    WritableVirtualMachineInterfaceTypeEnum["CiscoFlexstackPlus"] = "cisco-flexstack-plus";
    WritableVirtualMachineInterfaceTypeEnum["JuniperVcp"] = "juniper-vcp";
    WritableVirtualMachineInterfaceTypeEnum["ExtremeSummitstack"] = "extreme-summitstack";
    WritableVirtualMachineInterfaceTypeEnum["ExtremeSummitstack128"] = "extreme-summitstack-128";
    WritableVirtualMachineInterfaceTypeEnum["ExtremeSummitstack256"] = "extreme-summitstack-256";
    WritableVirtualMachineInterfaceTypeEnum["ExtremeSummitstack512"] = "extreme-summitstack-512";
    WritableVirtualMachineInterfaceTypeEnum["Other"] = "other";
})(WritableVirtualMachineInterfaceTypeEnum || (WritableVirtualMachineInterfaceTypeEnum = {}));
var WritableVirtualMachineInterfaceInput = /** @class */ (function (_super) {
    __extends(WritableVirtualMachineInterfaceInput, _super);
    function WritableVirtualMachineInterfaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritableVirtualMachineInterfaceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], WritableVirtualMachineInterfaceInput.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], WritableVirtualMachineInterfaceInput.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], WritableVirtualMachineInterfaceInput.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], WritableVirtualMachineInterfaceInput.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritableVirtualMachineInterfaceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagged_vlans" }),
        __metadata("design:type", Array)
    ], WritableVirtualMachineInterfaceInput.prototype, "taggedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritableVirtualMachineInterfaceInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritableVirtualMachineInterfaceInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=untagged_vlan" }),
        __metadata("design:type", Number)
    ], WritableVirtualMachineInterfaceInput.prototype, "untaggedVlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtual_machine" }),
        __metadata("design:type", Number)
    ], WritableVirtualMachineInterfaceInput.prototype, "virtualMachine", void 0);
    return WritableVirtualMachineInterfaceInput;
}(SpeakeasyBase));
export { WritableVirtualMachineInterfaceInput };
