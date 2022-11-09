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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// X509CertificateDetails
/**
 * Details of an X.509 certificate. For informational purposes only.
**/
var X509CertificateDetails = /** @class */ (function (_super) {
    __extends(X509CertificateDetails, _super);
    function X509CertificateDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=expiryTime" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "expiryTime", void 0);
    __decorate([
        Metadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "issuer", void 0);
    __decorate([
        Metadata({ data: "json, name=publicKeyType" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "publicKeyType", void 0);
    __decorate([
        Metadata({ data: "json, name=signatureAlgorithm" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "signatureAlgorithm", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], X509CertificateDetails.prototype, "subject", void 0);
    return X509CertificateDetails;
}(SpeakeasyBase));
export { X509CertificateDetails };
