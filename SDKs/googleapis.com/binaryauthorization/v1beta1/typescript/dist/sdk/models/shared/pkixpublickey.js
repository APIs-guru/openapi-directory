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
export var PkixPublicKeySignatureAlgorithmEnum;
(function (PkixPublicKeySignatureAlgorithmEnum) {
    PkixPublicKeySignatureAlgorithmEnum["SignatureAlgorithmUnspecified"] = "SIGNATURE_ALGORITHM_UNSPECIFIED";
    PkixPublicKeySignatureAlgorithmEnum["RsaPss2048Sha256"] = "RSA_PSS_2048_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPss2048Sha256"] = "RSA_SIGN_PSS_2048_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaPss3072Sha256"] = "RSA_PSS_3072_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPss3072Sha256"] = "RSA_SIGN_PSS_3072_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaPss4096Sha256"] = "RSA_PSS_4096_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPss4096Sha256"] = "RSA_SIGN_PSS_4096_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaPss4096Sha512"] = "RSA_PSS_4096_SHA512";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPss4096Sha512"] = "RSA_SIGN_PSS_4096_SHA512";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPkcs12048Sha256"] = "RSA_SIGN_PKCS1_2048_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPkcs13072Sha256"] = "RSA_SIGN_PKCS1_3072_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPkcs14096Sha256"] = "RSA_SIGN_PKCS1_4096_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["RsaSignPkcs14096Sha512"] = "RSA_SIGN_PKCS1_4096_SHA512";
    PkixPublicKeySignatureAlgorithmEnum["EcdsaP256Sha256"] = "ECDSA_P256_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["EcSignP256Sha256"] = "EC_SIGN_P256_SHA256";
    PkixPublicKeySignatureAlgorithmEnum["EcdsaP384Sha384"] = "ECDSA_P384_SHA384";
    PkixPublicKeySignatureAlgorithmEnum["EcSignP384Sha384"] = "EC_SIGN_P384_SHA384";
    PkixPublicKeySignatureAlgorithmEnum["EcdsaP521Sha512"] = "ECDSA_P521_SHA512";
    PkixPublicKeySignatureAlgorithmEnum["EcSignP521Sha512"] = "EC_SIGN_P521_SHA512";
})(PkixPublicKeySignatureAlgorithmEnum || (PkixPublicKeySignatureAlgorithmEnum = {}));
// PkixPublicKey
/**
 * A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
**/
var PkixPublicKey = /** @class */ (function (_super) {
    __extends(PkixPublicKey, _super);
    function PkixPublicKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKeyPem" }),
        __metadata("design:type", String)
    ], PkixPublicKey.prototype, "publicKeyPem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" }),
        __metadata("design:type", String)
    ], PkixPublicKey.prototype, "signatureAlgorithm", void 0);
    return PkixPublicKey;
}(SpeakeasyBase));
export { PkixPublicKey };
