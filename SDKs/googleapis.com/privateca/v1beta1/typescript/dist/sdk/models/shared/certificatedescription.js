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
import { KeyId } from "./keyid";
import { CertificateFingerprint } from "./certificatefingerprint";
import { ReusableConfigValues } from "./reusableconfigvalues";
import { PublicKey } from "./publickey";
import { SubjectDescription } from "./subjectdescription";
// CertificateDescription
/**
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
**/
var CertificateDescription = /** @class */ (function (_super) {
    __extends(CertificateDescription, _super);
    function CertificateDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aiaIssuingCertificateUrls" }),
        __metadata("design:type", Array)
    ], CertificateDescription.prototype, "aiaIssuingCertificateUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorityKeyId" }),
        __metadata("design:type", KeyId)
    ], CertificateDescription.prototype, "authorityKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certFingerprint" }),
        __metadata("design:type", CertificateFingerprint)
    ], CertificateDescription.prototype, "certFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configValues" }),
        __metadata("design:type", ReusableConfigValues)
    ], CertificateDescription.prototype, "configValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crlDistributionPoints" }),
        __metadata("design:type", Array)
    ], CertificateDescription.prototype, "crlDistributionPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", PublicKey)
    ], CertificateDescription.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectDescription" }),
        __metadata("design:type", SubjectDescription)
    ], CertificateDescription.prototype, "subjectDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectKeyId" }),
        __metadata("design:type", KeyId)
    ], CertificateDescription.prototype, "subjectKeyId", void 0);
    return CertificateDescription;
}(SpeakeasyBase));
export { CertificateDescription };
