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
import { OsPolicyResourcePackageResourceApt } from "./ospolicyresourcepackageresourceapt";
import { OsPolicyResourcePackageResourceDeb } from "./ospolicyresourcepackageresourcedeb";
import { OsPolicyResourcePackageResourceGooGet } from "./ospolicyresourcepackageresourcegooget";
import { OsPolicyResourcePackageResourceMsi } from "./ospolicyresourcepackageresourcemsi";
import { OsPolicyResourcePackageResourceRpm } from "./ospolicyresourcepackageresourcerpm";
import { OsPolicyResourcePackageResourceYum } from "./ospolicyresourcepackageresourceyum";
import { OsPolicyResourcePackageResourceZypper } from "./ospolicyresourcepackageresourcezypper";
export var OsPolicyResourcePackageResourceDesiredStateEnum;
(function (OsPolicyResourcePackageResourceDesiredStateEnum) {
    OsPolicyResourcePackageResourceDesiredStateEnum["DesiredStateUnspecified"] = "DESIRED_STATE_UNSPECIFIED";
    OsPolicyResourcePackageResourceDesiredStateEnum["Installed"] = "INSTALLED";
    OsPolicyResourcePackageResourceDesiredStateEnum["Removed"] = "REMOVED";
})(OsPolicyResourcePackageResourceDesiredStateEnum || (OsPolicyResourcePackageResourceDesiredStateEnum = {}));
// OsPolicyResourcePackageResource
/**
 * A resource that manages a system package.
**/
var OsPolicyResourcePackageResource = /** @class */ (function (_super) {
    __extends(OsPolicyResourcePackageResource, _super);
    function OsPolicyResourcePackageResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apt" }),
        __metadata("design:type", OsPolicyResourcePackageResourceApt)
    ], OsPolicyResourcePackageResource.prototype, "apt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deb" }),
        __metadata("design:type", OsPolicyResourcePackageResourceDeb)
    ], OsPolicyResourcePackageResource.prototype, "deb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredState" }),
        __metadata("design:type", String)
    ], OsPolicyResourcePackageResource.prototype, "desiredState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googet" }),
        __metadata("design:type", OsPolicyResourcePackageResourceGooGet)
    ], OsPolicyResourcePackageResource.prototype, "googet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msi" }),
        __metadata("design:type", OsPolicyResourcePackageResourceMsi)
    ], OsPolicyResourcePackageResource.prototype, "msi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rpm" }),
        __metadata("design:type", OsPolicyResourcePackageResourceRpm)
    ], OsPolicyResourcePackageResource.prototype, "rpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yum" }),
        __metadata("design:type", OsPolicyResourcePackageResourceYum)
    ], OsPolicyResourcePackageResource.prototype, "yum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zypper" }),
        __metadata("design:type", OsPolicyResourcePackageResourceZypper)
    ], OsPolicyResourcePackageResource.prototype, "zypper", void 0);
    return OsPolicyResourcePackageResource;
}(SpeakeasyBase));
export { OsPolicyResourcePackageResource };
