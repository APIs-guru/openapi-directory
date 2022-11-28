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
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedPlatform } from "./nestedplatform";
import { DeviceIpAddress } from "./deviceipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { DeviceVirtualChassis } from "./devicevirtualchassis";
var DeviceFace = /** @class */ (function (_super) {
    __extends(DeviceFace, _super);
    function DeviceFace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceFace.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], DeviceFace.prototype, "value", void 0);
    return DeviceFace;
}(SpeakeasyBase));
export { DeviceFace };
var DeviceStatus = /** @class */ (function (_super) {
    __extends(DeviceStatus, _super);
    function DeviceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], DeviceStatus.prototype, "value", void 0);
    return DeviceStatus;
}(SpeakeasyBase));
export { DeviceStatus };
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_tag" }),
        __metadata("design:type", String)
    ], Device.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", NestedCluster)
    ], Device.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Device.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Device.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], Device.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_role" }),
        __metadata("design:type", NestedDeviceRole)
    ], Device.prototype, "deviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], Device.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Device.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=face" }),
        __metadata("design:type", DeviceFace)
    ], Device.prototype, "face", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Device.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Device.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local_context_data" }),
        __metadata("design:type", String)
    ], Device.prototype, "localContextData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_device" }),
        __metadata("design:type", String)
    ], Device.prototype, "parentDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", NestedPlatform)
    ], Device.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], Device.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip" }),
        __metadata("design:type", DeviceIpAddress)
    ], Device.prototype, "primaryIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip4" }),
        __metadata("design:type", DeviceIpAddress)
    ], Device.prototype, "primaryIp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip6" }),
        __metadata("design:type", DeviceIpAddress)
    ], Device.prototype, "primaryIp6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rack" }),
        __metadata("design:type", NestedRack)
    ], Device.prototype, "rack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], Device.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", NestedSite)
    ], Device.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", DeviceStatus)
    ], Device.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Device.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", NestedTenant)
    ], Device.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vc_position" }),
        __metadata("design:type", Number)
    ], Device.prototype, "vcPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vc_priority" }),
        __metadata("design:type", Number)
    ], Device.prototype, "vcPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtual_chassis" }),
        __metadata("design:type", DeviceVirtualChassis)
    ], Device.prototype, "virtualChassis", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
