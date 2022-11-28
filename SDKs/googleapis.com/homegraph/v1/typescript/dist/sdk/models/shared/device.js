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
import { DeviceInfo } from "./deviceinfo";
import { DeviceNames } from "./devicenames";
import { AgentOtherDeviceId } from "./agentotherdeviceid";
// Device
/**
 * Third-party device definition. Next ID = 14
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], Device.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customData" }),
        __metadata("design:type", Map)
    ], Device.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceInfo" }),
        __metadata("design:type", DeviceInfo)
    ], Device.prototype, "deviceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Device.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", DeviceNames)
    ], Device.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationSupportedByAgent" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "notificationSupportedByAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherDeviceIds", elemType: AgentOtherDeviceId }),
        __metadata("design:type", Array)
    ], Device.prototype, "otherDeviceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomHint" }),
        __metadata("design:type", String)
    ], Device.prototype, "roomHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structureHint" }),
        __metadata("design:type", String)
    ], Device.prototype, "structureHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traits" }),
        __metadata("design:type", Array)
    ], Device.prototype, "traits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Device.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=willReportState" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "willReportState", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
