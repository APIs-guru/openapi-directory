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
import { NestedDeviceInput } from "./nesteddevice";
export var WritableDeviceWithConfigContextRackFaceEnum;
(function (WritableDeviceWithConfigContextRackFaceEnum) {
    WritableDeviceWithConfigContextRackFaceEnum["Front"] = "front";
    WritableDeviceWithConfigContextRackFaceEnum["Rear"] = "rear";
})(WritableDeviceWithConfigContextRackFaceEnum || (WritableDeviceWithConfigContextRackFaceEnum = {}));
export var WritableDeviceWithConfigContextStatusEnum;
(function (WritableDeviceWithConfigContextStatusEnum) {
    WritableDeviceWithConfigContextStatusEnum["Offline"] = "offline";
    WritableDeviceWithConfigContextStatusEnum["Active"] = "active";
    WritableDeviceWithConfigContextStatusEnum["Planned"] = "planned";
    WritableDeviceWithConfigContextStatusEnum["Staged"] = "staged";
    WritableDeviceWithConfigContextStatusEnum["Failed"] = "failed";
    WritableDeviceWithConfigContextStatusEnum["Inventory"] = "inventory";
    WritableDeviceWithConfigContextStatusEnum["Decommissioning"] = "decommissioning";
})(WritableDeviceWithConfigContextStatusEnum || (WritableDeviceWithConfigContextStatusEnum = {}));
var WritableDeviceWithConfigContextInput = /** @class */ (function (_super) {
    __extends(WritableDeviceWithConfigContextInput, _super);
    function WritableDeviceWithConfigContextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_tag" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], WritableDeviceWithConfigContextInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_role" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "deviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=face" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "face", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local_context_data" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "localContextData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_device" }),
        __metadata("design:type", NestedDeviceInput)
    ], WritableDeviceWithConfigContextInput.prototype, "parentDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip4" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "primaryIp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip6" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "primaryIp6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rack" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "rack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WritableDeviceWithConfigContextInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritableDeviceWithConfigContextInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vc_position" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "vcPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vc_priority" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "vcPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtual_chassis" }),
        __metadata("design:type", Number)
    ], WritableDeviceWithConfigContextInput.prototype, "virtualChassis", void 0);
    return WritableDeviceWithConfigContextInput;
}(SpeakeasyBase));
export { WritableDeviceWithConfigContextInput };
