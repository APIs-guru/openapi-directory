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
export var CryptoKeyVersionTemplateAlgorithmEnum;
(function (CryptoKeyVersionTemplateAlgorithmEnum) {
    CryptoKeyVersionTemplateAlgorithmEnum["CryptoKeyVersionAlgorithmUnspecified"] = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED";
    CryptoKeyVersionTemplateAlgorithmEnum["GoogleSymmetricEncryption"] = "GOOGLE_SYMMETRIC_ENCRYPTION";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPss2048Sha256"] = "RSA_SIGN_PSS_2048_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPss3072Sha256"] = "RSA_SIGN_PSS_3072_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPss4096Sha256"] = "RSA_SIGN_PSS_4096_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPss4096Sha512"] = "RSA_SIGN_PSS_4096_SHA512";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPkcs12048Sha256"] = "RSA_SIGN_PKCS1_2048_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPkcs13072Sha256"] = "RSA_SIGN_PKCS1_3072_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPkcs14096Sha256"] = "RSA_SIGN_PKCS1_4096_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignPkcs14096Sha512"] = "RSA_SIGN_PKCS1_4096_SHA512";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignRawPkcs12048"] = "RSA_SIGN_RAW_PKCS1_2048";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignRawPkcs13072"] = "RSA_SIGN_RAW_PKCS1_3072";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaSignRawPkcs14096"] = "RSA_SIGN_RAW_PKCS1_4096";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep2048Sha256"] = "RSA_DECRYPT_OAEP_2048_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep3072Sha256"] = "RSA_DECRYPT_OAEP_3072_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep4096Sha256"] = "RSA_DECRYPT_OAEP_4096_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep4096Sha512"] = "RSA_DECRYPT_OAEP_4096_SHA512";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep2048Sha1"] = "RSA_DECRYPT_OAEP_2048_SHA1";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep3072Sha1"] = "RSA_DECRYPT_OAEP_3072_SHA1";
    CryptoKeyVersionTemplateAlgorithmEnum["RsaDecryptOaep4096Sha1"] = "RSA_DECRYPT_OAEP_4096_SHA1";
    CryptoKeyVersionTemplateAlgorithmEnum["EcSignP256Sha256"] = "EC_SIGN_P256_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["EcSignP384Sha384"] = "EC_SIGN_P384_SHA384";
    CryptoKeyVersionTemplateAlgorithmEnum["EcSignSecp256K1Sha256"] = "EC_SIGN_SECP256K1_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["HmacSha256"] = "HMAC_SHA256";
    CryptoKeyVersionTemplateAlgorithmEnum["HmacSha1"] = "HMAC_SHA1";
    CryptoKeyVersionTemplateAlgorithmEnum["HmacSha384"] = "HMAC_SHA384";
    CryptoKeyVersionTemplateAlgorithmEnum["HmacSha512"] = "HMAC_SHA512";
    CryptoKeyVersionTemplateAlgorithmEnum["HmacSha224"] = "HMAC_SHA224";
    CryptoKeyVersionTemplateAlgorithmEnum["ExternalSymmetricEncryption"] = "EXTERNAL_SYMMETRIC_ENCRYPTION";
})(CryptoKeyVersionTemplateAlgorithmEnum || (CryptoKeyVersionTemplateAlgorithmEnum = {}));
export var CryptoKeyVersionTemplateProtectionLevelEnum;
(function (CryptoKeyVersionTemplateProtectionLevelEnum) {
    CryptoKeyVersionTemplateProtectionLevelEnum["ProtectionLevelUnspecified"] = "PROTECTION_LEVEL_UNSPECIFIED";
    CryptoKeyVersionTemplateProtectionLevelEnum["Software"] = "SOFTWARE";
    CryptoKeyVersionTemplateProtectionLevelEnum["Hsm"] = "HSM";
    CryptoKeyVersionTemplateProtectionLevelEnum["External"] = "EXTERNAL";
    CryptoKeyVersionTemplateProtectionLevelEnum["ExternalVpc"] = "EXTERNAL_VPC";
})(CryptoKeyVersionTemplateProtectionLevelEnum || (CryptoKeyVersionTemplateProtectionLevelEnum = {}));
// CryptoKeyVersionTemplate
/**
 * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
**/
var CryptoKeyVersionTemplate = /** @class */ (function (_super) {
    __extends(CryptoKeyVersionTemplate, _super);
    function CryptoKeyVersionTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], CryptoKeyVersionTemplate.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], CryptoKeyVersionTemplate.prototype, "protectionLevel", void 0);
    return CryptoKeyVersionTemplate;
}(SpeakeasyBase));
export { CryptoKeyVersionTemplate };
