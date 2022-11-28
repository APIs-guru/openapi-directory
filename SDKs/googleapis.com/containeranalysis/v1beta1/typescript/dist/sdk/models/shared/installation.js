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
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";
export var InstallationArchitectureEnum;
(function (InstallationArchitectureEnum) {
    InstallationArchitectureEnum["ArchitectureUnspecified"] = "ARCHITECTURE_UNSPECIFIED";
    InstallationArchitectureEnum["X86"] = "X86";
    InstallationArchitectureEnum["X64"] = "X64";
})(InstallationArchitectureEnum || (InstallationArchitectureEnum = {}));
// InstallationInput
/**
 * This represents how a particular software package may be installed on a system.
**/
var InstallationInput = /** @class */ (function (_super) {
    __extends(InstallationInput, _super);
    function InstallationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", License)
    ], InstallationInput.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location", elemType: Location }),
        __metadata("design:type", Array)
    ], InstallationInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], InstallationInput.prototype, "version", void 0);
    return InstallationInput;
}(SpeakeasyBase));
export { InstallationInput };
// Installation
/**
 * This represents how a particular software package may be installed on a system.
**/
var Installation = /** @class */ (function (_super) {
    __extends(Installation, _super);
    function Installation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], Installation.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpeUri" }),
        __metadata("design:type", String)
    ], Installation.prototype, "cpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", License)
    ], Installation.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location", elemType: Location }),
        __metadata("design:type", Array)
    ], Installation.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Installation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], Installation.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], Installation.prototype, "version", void 0);
    return Installation;
}(SpeakeasyBase));
export { Installation };
