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
import { AllowedConfigList } from "./allowedconfiglist";
import { IssuanceModes } from "./issuancemodes";
import { Subject } from "./subject";
import { AllowedSubjectAltNames } from "./allowedsubjectaltnames";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";
// CertificateAuthorityPolicy
/**
 * The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
**/
var CertificateAuthorityPolicy = /** @class */ (function (_super) {
    __extends(CertificateAuthorityPolicy, _super);
    function CertificateAuthorityPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedCommonNames" }),
        __metadata("design:type", Array)
    ], CertificateAuthorityPolicy.prototype, "allowedCommonNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedConfigList" }),
        __metadata("design:type", AllowedConfigList)
    ], CertificateAuthorityPolicy.prototype, "allowedConfigList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIssuanceModes" }),
        __metadata("design:type", IssuanceModes)
    ], CertificateAuthorityPolicy.prototype, "allowedIssuanceModes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedLocationsAndOrganizations", elemType: Subject }),
        __metadata("design:type", Array)
    ], CertificateAuthorityPolicy.prototype, "allowedLocationsAndOrganizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedSans" }),
        __metadata("design:type", AllowedSubjectAltNames)
    ], CertificateAuthorityPolicy.prototype, "allowedSans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumLifetime" }),
        __metadata("design:type", String)
    ], CertificateAuthorityPolicy.prototype, "maximumLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwriteConfigValues" }),
        __metadata("design:type", ReusableConfigWrapper)
    ], CertificateAuthorityPolicy.prototype, "overwriteConfigValues", void 0);
    return CertificateAuthorityPolicy;
}(SpeakeasyBase));
export { CertificateAuthorityPolicy };
