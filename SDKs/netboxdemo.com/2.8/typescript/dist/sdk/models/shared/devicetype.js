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
import { NestedManufacturer } from "./nestedmanufacturer";
export var DeviceTypeSubdeviceRoleLabelEnum;
(function (DeviceTypeSubdeviceRoleLabelEnum) {
    DeviceTypeSubdeviceRoleLabelEnum["Parent"] = "Parent";
    DeviceTypeSubdeviceRoleLabelEnum["Child"] = "Child";
})(DeviceTypeSubdeviceRoleLabelEnum || (DeviceTypeSubdeviceRoleLabelEnum = {}));
export var DeviceTypeSubdeviceRoleValueEnum;
(function (DeviceTypeSubdeviceRoleValueEnum) {
    DeviceTypeSubdeviceRoleValueEnum["Parent"] = "parent";
    DeviceTypeSubdeviceRoleValueEnum["Child"] = "child";
})(DeviceTypeSubdeviceRoleValueEnum || (DeviceTypeSubdeviceRoleValueEnum = {}));
var DeviceTypeSubdeviceRole = /** @class */ (function (_super) {
    __extends(DeviceTypeSubdeviceRole, _super);
    function DeviceTypeSubdeviceRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceTypeSubdeviceRole.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeviceTypeSubdeviceRole.prototype, "value", void 0);
    return DeviceTypeSubdeviceRole;
}(SpeakeasyBase));
export { DeviceTypeSubdeviceRole };
var DeviceType = /** @class */ (function (_super) {
    __extends(DeviceType, _super);
    function DeviceType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], DeviceType.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], DeviceType.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_count" }),
        __metadata("design:type", Number)
    ], DeviceType.prototype, "deviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=front_image" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "frontImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeviceType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_full_depth" }),
        __metadata("design:type", Boolean)
    ], DeviceType.prototype, "isFullDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], DeviceType.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", NestedManufacturer)
    ], DeviceType.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=part_number" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "partNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rear_image" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "rearImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], DeviceType.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdevice_role" }),
        __metadata("design:type", DeviceTypeSubdeviceRole)
    ], DeviceType.prototype, "subdeviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], DeviceType.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=u_height" }),
        __metadata("design:type", Number)
    ], DeviceType.prototype, "uHeight", void 0);
    return DeviceType;
}(SpeakeasyBase));
export { DeviceType };
