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
import { Digest } from "./digest";
import { Distribution } from "./distribution";
import { License } from "./license";
import { Version } from "./version";
export var PackageArchitectureEnum;
(function (PackageArchitectureEnum) {
    PackageArchitectureEnum["ArchitectureUnspecified"] = "ARCHITECTURE_UNSPECIFIED";
    PackageArchitectureEnum["X86"] = "X86";
    PackageArchitectureEnum["X64"] = "X64";
})(PackageArchitectureEnum || (PackageArchitectureEnum = {}));
// Package
/**
 * Package represents a particular package version.
**/
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], Package.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpeUri" }),
        __metadata("design:type", String)
    ], Package.prototype, "cpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Package.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest", elemType: Digest }),
        __metadata("design:type", Array)
    ], Package.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distribution", elemType: Distribution }),
        __metadata("design:type", Array)
    ], Package.prototype, "distribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", License)
    ], Package.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintainer" }),
        __metadata("design:type", String)
    ], Package.prototype, "maintainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Package.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], Package.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Package.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], Package.prototype, "version", void 0);
    return Package;
}(SpeakeasyBase));
export { Package };
