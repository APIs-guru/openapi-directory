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
export var PublicKeyAlgorithmEnum;
(function (PublicKeyAlgorithmEnum) {
    PublicKeyAlgorithmEnum["CryptoKeyVersionAlgorithmUnspecified"] = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED";
    PublicKeyAlgorithmEnum["GoogleSymmetricEncryption"] = "GOOGLE_SYMMETRIC_ENCRYPTION";
    PublicKeyAlgorithmEnum["RsaSignPss2048Sha256"] = "RSA_SIGN_PSS_2048_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPss3072Sha256"] = "RSA_SIGN_PSS_3072_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPss4096Sha256"] = "RSA_SIGN_PSS_4096_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPss4096Sha512"] = "RSA_SIGN_PSS_4096_SHA512";
    PublicKeyAlgorithmEnum["RsaSignPkcs12048Sha256"] = "RSA_SIGN_PKCS1_2048_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPkcs13072Sha256"] = "RSA_SIGN_PKCS1_3072_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPkcs14096Sha256"] = "RSA_SIGN_PKCS1_4096_SHA256";
    PublicKeyAlgorithmEnum["RsaSignPkcs14096Sha512"] = "RSA_SIGN_PKCS1_4096_SHA512";
    PublicKeyAlgorithmEnum["RsaSignRawPkcs12048"] = "RSA_SIGN_RAW_PKCS1_2048";
    PublicKeyAlgorithmEnum["RsaSignRawPkcs13072"] = "RSA_SIGN_RAW_PKCS1_3072";
    PublicKeyAlgorithmEnum["RsaSignRawPkcs14096"] = "RSA_SIGN_RAW_PKCS1_4096";
    PublicKeyAlgorithmEnum["RsaDecryptOaep2048Sha256"] = "RSA_DECRYPT_OAEP_2048_SHA256";
    PublicKeyAlgorithmEnum["RsaDecryptOaep3072Sha256"] = "RSA_DECRYPT_OAEP_3072_SHA256";
    PublicKeyAlgorithmEnum["RsaDecryptOaep4096Sha256"] = "RSA_DECRYPT_OAEP_4096_SHA256";
    PublicKeyAlgorithmEnum["RsaDecryptOaep4096Sha512"] = "RSA_DECRYPT_OAEP_4096_SHA512";
    PublicKeyAlgorithmEnum["RsaDecryptOaep2048Sha1"] = "RSA_DECRYPT_OAEP_2048_SHA1";
    PublicKeyAlgorithmEnum["RsaDecryptOaep3072Sha1"] = "RSA_DECRYPT_OAEP_3072_SHA1";
    PublicKeyAlgorithmEnum["RsaDecryptOaep4096Sha1"] = "RSA_DECRYPT_OAEP_4096_SHA1";
    PublicKeyAlgorithmEnum["EcSignP256Sha256"] = "EC_SIGN_P256_SHA256";
    PublicKeyAlgorithmEnum["EcSignP384Sha384"] = "EC_SIGN_P384_SHA384";
    PublicKeyAlgorithmEnum["EcSignSecp256K1Sha256"] = "EC_SIGN_SECP256K1_SHA256";
    PublicKeyAlgorithmEnum["HmacSha256"] = "HMAC_SHA256";
    PublicKeyAlgorithmEnum["HmacSha1"] = "HMAC_SHA1";
    PublicKeyAlgorithmEnum["HmacSha384"] = "HMAC_SHA384";
    PublicKeyAlgorithmEnum["HmacSha512"] = "HMAC_SHA512";
    PublicKeyAlgorithmEnum["HmacSha224"] = "HMAC_SHA224";
    PublicKeyAlgorithmEnum["ExternalSymmetricEncryption"] = "EXTERNAL_SYMMETRIC_ENCRYPTION";
})(PublicKeyAlgorithmEnum || (PublicKeyAlgorithmEnum = {}));
export var PublicKeyProtectionLevelEnum;
(function (PublicKeyProtectionLevelEnum) {
    PublicKeyProtectionLevelEnum["ProtectionLevelUnspecified"] = "PROTECTION_LEVEL_UNSPECIFIED";
    PublicKeyProtectionLevelEnum["Software"] = "SOFTWARE";
    PublicKeyProtectionLevelEnum["Hsm"] = "HSM";
    PublicKeyProtectionLevelEnum["External"] = "EXTERNAL";
    PublicKeyProtectionLevelEnum["ExternalVpc"] = "EXTERNAL_VPC";
})(PublicKeyProtectionLevelEnum || (PublicKeyProtectionLevelEnum = {}));
// PublicKey
/**
 * The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.
**/
var PublicKey = /** @class */ (function (_super) {
    __extends(PublicKey, _super);
    function PublicKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], PublicKey.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublicKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pem" }),
        __metadata("design:type", String)
    ], PublicKey.prototype, "pem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pemCrc32c" }),
        __metadata("design:type", String)
    ], PublicKey.prototype, "pemCrc32c", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], PublicKey.prototype, "protectionLevel", void 0);
    return PublicKey;
}(SpeakeasyBase));
export { PublicKey };
