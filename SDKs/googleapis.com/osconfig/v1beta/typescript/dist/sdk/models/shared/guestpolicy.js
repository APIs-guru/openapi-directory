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
import { Assignment } from "./assignment";
import { PackageRepository } from "./packagerepository";
import { Package } from "./package";
import { SoftwareRecipe } from "./softwarerecipe";
// GuestPolicy
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
var GuestPolicy = /** @class */ (function (_super) {
    __extends(GuestPolicy, _super);
    function GuestPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignment" }),
        __metadata("design:type", Assignment)
    ], GuestPolicy.prototype, "assignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GuestPolicy.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GuestPolicy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GuestPolicy.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GuestPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageRepositories", elemType: PackageRepository }),
        __metadata("design:type", Array)
    ], GuestPolicy.prototype, "packageRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages", elemType: Package }),
        __metadata("design:type", Array)
    ], GuestPolicy.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipes", elemType: SoftwareRecipe }),
        __metadata("design:type", Array)
    ], GuestPolicy.prototype, "recipes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GuestPolicy.prototype, "updateTime", void 0);
    return GuestPolicy;
}(SpeakeasyBase));
export { GuestPolicy };
// GuestPolicyInput
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
var GuestPolicyInput = /** @class */ (function (_super) {
    __extends(GuestPolicyInput, _super);
    function GuestPolicyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignment" }),
        __metadata("design:type", Assignment)
    ], GuestPolicyInput.prototype, "assignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GuestPolicyInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GuestPolicyInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GuestPolicyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageRepositories", elemType: PackageRepository }),
        __metadata("design:type", Array)
    ], GuestPolicyInput.prototype, "packageRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages", elemType: Package }),
        __metadata("design:type", Array)
    ], GuestPolicyInput.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipes", elemType: SoftwareRecipe }),
        __metadata("design:type", Array)
    ], GuestPolicyInput.prototype, "recipes", void 0);
    return GuestPolicyInput;
}(SpeakeasyBase));
export { GuestPolicyInput };
