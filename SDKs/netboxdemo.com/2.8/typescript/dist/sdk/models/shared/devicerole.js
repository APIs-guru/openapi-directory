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
var DeviceRole = /** @class */ (function (_super) {
    __extends(DeviceRole, _super);
    function DeviceRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], DeviceRole.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DeviceRole.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_count" }),
        __metadata("design:type", Number)
    ], DeviceRole.prototype, "deviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeviceRole.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceRole.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], DeviceRole.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualmachine_count" }),
        __metadata("design:type", Number)
    ], DeviceRole.prototype, "virtualmachineCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vm_role" }),
        __metadata("design:type", Boolean)
    ], DeviceRole.prototype, "vmRole", void 0);
    return DeviceRole;
}(SpeakeasyBase));
export { DeviceRole };
var DeviceRoleInput = /** @class */ (function (_super) {
    __extends(DeviceRoleInput, _super);
    function DeviceRoleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], DeviceRoleInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DeviceRoleInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceRoleInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], DeviceRoleInput.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vm_role" }),
        __metadata("design:type", Boolean)
    ], DeviceRoleInput.prototype, "vmRole", void 0);
    return DeviceRoleInput;
}(SpeakeasyBase));
export { DeviceRoleInput };
