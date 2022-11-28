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
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";
import { SasPortalChannelWithScore } from "./sasportalchannelwithscore";
import { SasPortalDeviceMetadata } from "./sasportaldevicemetadata";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDeviceGrant } from "./sasportaldevicegrant";
import { SasPortalDeviceMetadataInput } from "./sasportaldevicemetadata";
export var SasPortalDeviceStateEnum;
(function (SasPortalDeviceStateEnum) {
    SasPortalDeviceStateEnum["DeviceStateUnspecified"] = "DEVICE_STATE_UNSPECIFIED";
    SasPortalDeviceStateEnum["Reserved"] = "RESERVED";
    SasPortalDeviceStateEnum["Registered"] = "REGISTERED";
    SasPortalDeviceStateEnum["Deregistered"] = "DEREGISTERED";
})(SasPortalDeviceStateEnum || (SasPortalDeviceStateEnum = {}));
var SasPortalDevice = /** @class */ (function (_super) {
    __extends(SasPortalDevice, _super);
    function SasPortalDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeConfig" }),
        __metadata("design:type", SasPortalDeviceConfig)
    ], SasPortalDevice.prototype, "activeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentChannels", elemType: SasPortalChannelWithScore }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "currentChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMetadata" }),
        __metadata("design:type", SasPortalDeviceMetadata)
    ], SasPortalDevice.prototype, "deviceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fccId" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "fccId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantRangeAllowlists", elemType: SasPortalFrequencyRange }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "grantRangeAllowlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grants", elemType: SasPortalDeviceGrant }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "grants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preloadedConfig" }),
        __metadata("design:type", SasPortalDeviceConfig)
    ], SasPortalDevice.prototype, "preloadedConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "state", void 0);
    return SasPortalDevice;
}(SpeakeasyBase));
export { SasPortalDevice };
var SasPortalDeviceInput = /** @class */ (function (_super) {
    __extends(SasPortalDeviceInput, _super);
    function SasPortalDeviceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeConfig" }),
        __metadata("design:type", SasPortalDeviceConfig)
    ], SasPortalDeviceInput.prototype, "activeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMetadata" }),
        __metadata("design:type", SasPortalDeviceMetadataInput)
    ], SasPortalDeviceInput.prototype, "deviceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fccId" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "fccId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantRangeAllowlists", elemType: SasPortalFrequencyRange }),
        __metadata("design:type", Array)
    ], SasPortalDeviceInput.prototype, "grantRangeAllowlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grants", elemType: SasPortalDeviceGrant }),
        __metadata("design:type", Array)
    ], SasPortalDeviceInput.prototype, "grants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preloadedConfig" }),
        __metadata("design:type", SasPortalDeviceConfig)
    ], SasPortalDeviceInput.prototype, "preloadedConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "state", void 0);
    return SasPortalDeviceInput;
}(SpeakeasyBase));
export { SasPortalDeviceInput };
