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
import { Devices } from "./devices";
import { LinodeConfigInterface } from "./linodeconfiginterface";
// LinodeConfigHelpers
/**
 * Helpers enabled when booting to this Linode Config.
**/
var LinodeConfigHelpers = /** @class */ (function (_super) {
    __extends(LinodeConfigHelpers, _super);
    function LinodeConfigHelpers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devtmpfs_automount" }),
        __metadata("design:type", Boolean)
    ], LinodeConfigHelpers.prototype, "devtmpfsAutomount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distro" }),
        __metadata("design:type", Boolean)
    ], LinodeConfigHelpers.prototype, "distro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modules_dep" }),
        __metadata("design:type", Boolean)
    ], LinodeConfigHelpers.prototype, "modulesDep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Boolean)
    ], LinodeConfigHelpers.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedb_disabled" }),
        __metadata("design:type", Boolean)
    ], LinodeConfigHelpers.prototype, "updatedbDisabled", void 0);
    return LinodeConfigHelpers;
}(SpeakeasyBase));
export { LinodeConfigHelpers };
export var LinodeConfigRunLevelEnum;
(function (LinodeConfigRunLevelEnum) {
    LinodeConfigRunLevelEnum["Default"] = "default";
    LinodeConfigRunLevelEnum["Single"] = "single";
    LinodeConfigRunLevelEnum["Binbash"] = "binbash";
})(LinodeConfigRunLevelEnum || (LinodeConfigRunLevelEnum = {}));
export var LinodeConfigVirtModeEnum;
(function (LinodeConfigVirtModeEnum) {
    LinodeConfigVirtModeEnum["Paravirt"] = "paravirt";
    LinodeConfigVirtModeEnum["Fullvirt"] = "fullvirt";
})(LinodeConfigVirtModeEnum || (LinodeConfigVirtModeEnum = {}));
var LinodeConfigInput = /** @class */ (function (_super) {
    __extends(LinodeConfigInput, _super);
    function LinodeConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devices" }),
        __metadata("design:type", Devices)
    ], LinodeConfigInput.prototype, "devices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpers" }),
        __metadata("design:type", LinodeConfigHelpers)
    ], LinodeConfigInput.prototype, "helpers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaces", elemType: LinodeConfigInterface }),
        __metadata("design:type", Array)
    ], LinodeConfigInput.prototype, "interfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kernel" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "kernel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory_limit" }),
        __metadata("design:type", Number)
    ], LinodeConfigInput.prototype, "memoryLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_device" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "rootDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_level" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "runLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virt_mode" }),
        __metadata("design:type", String)
    ], LinodeConfigInput.prototype, "virtMode", void 0);
    return LinodeConfigInput;
}(SpeakeasyBase));
export { LinodeConfigInput };
var LinodeConfig = /** @class */ (function (_super) {
    __extends(LinodeConfig, _super);
    function LinodeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devices" }),
        __metadata("design:type", Devices)
    ], LinodeConfig.prototype, "devices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpers" }),
        __metadata("design:type", LinodeConfigHelpers)
    ], LinodeConfig.prototype, "helpers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LinodeConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaces", elemType: LinodeConfigInterface }),
        __metadata("design:type", Array)
    ], LinodeConfig.prototype, "interfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kernel" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "kernel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory_limit" }),
        __metadata("design:type", Number)
    ], LinodeConfig.prototype, "memoryLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_device" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "rootDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_level" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "runLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virt_mode" }),
        __metadata("design:type", String)
    ], LinodeConfig.prototype, "virtMode", void 0);
    return LinodeConfig;
}(SpeakeasyBase));
export { LinodeConfig };
