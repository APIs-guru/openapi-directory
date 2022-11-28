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
export var RevokedCertificateRevocationReasonEnum;
(function (RevokedCertificateRevocationReasonEnum) {
    RevokedCertificateRevocationReasonEnum["RevocationReasonUnspecified"] = "REVOCATION_REASON_UNSPECIFIED";
    RevokedCertificateRevocationReasonEnum["KeyCompromise"] = "KEY_COMPROMISE";
    RevokedCertificateRevocationReasonEnum["CertificateAuthorityCompromise"] = "CERTIFICATE_AUTHORITY_COMPROMISE";
    RevokedCertificateRevocationReasonEnum["AffiliationChanged"] = "AFFILIATION_CHANGED";
    RevokedCertificateRevocationReasonEnum["Superseded"] = "SUPERSEDED";
    RevokedCertificateRevocationReasonEnum["CessationOfOperation"] = "CESSATION_OF_OPERATION";
    RevokedCertificateRevocationReasonEnum["CertificateHold"] = "CERTIFICATE_HOLD";
    RevokedCertificateRevocationReasonEnum["PrivilegeWithdrawn"] = "PRIVILEGE_WITHDRAWN";
    RevokedCertificateRevocationReasonEnum["AttributeAuthorityCompromise"] = "ATTRIBUTE_AUTHORITY_COMPROMISE";
})(RevokedCertificateRevocationReasonEnum || (RevokedCertificateRevocationReasonEnum = {}));
// RevokedCertificate
/**
 * Describes a revoked Certificate.
**/
var RevokedCertificate = /** @class */ (function (_super) {
    __extends(RevokedCertificate, _super);
    function RevokedCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], RevokedCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hexSerialNumber" }),
        __metadata("design:type", String)
    ], RevokedCertificate.prototype, "hexSerialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revocationReason" }),
        __metadata("design:type", String)
    ], RevokedCertificate.prototype, "revocationReason", void 0);
    return RevokedCertificate;
}(SpeakeasyBase));
export { RevokedCertificate };
