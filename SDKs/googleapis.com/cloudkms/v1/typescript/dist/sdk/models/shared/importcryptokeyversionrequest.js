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
export var ImportCryptoKeyVersionRequestAlgorithmEnum;
(function (ImportCryptoKeyVersionRequestAlgorithmEnum) {
    ImportCryptoKeyVersionRequestAlgorithmEnum["CryptoKeyVersionAlgorithmUnspecified"] = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED";
    ImportCryptoKeyVersionRequestAlgorithmEnum["GoogleSymmetricEncryption"] = "GOOGLE_SYMMETRIC_ENCRYPTION";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPss2048Sha256"] = "RSA_SIGN_PSS_2048_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPss3072Sha256"] = "RSA_SIGN_PSS_3072_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPss4096Sha256"] = "RSA_SIGN_PSS_4096_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPss4096Sha512"] = "RSA_SIGN_PSS_4096_SHA512";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPkcs12048Sha256"] = "RSA_SIGN_PKCS1_2048_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPkcs13072Sha256"] = "RSA_SIGN_PKCS1_3072_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPkcs14096Sha256"] = "RSA_SIGN_PKCS1_4096_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignPkcs14096Sha512"] = "RSA_SIGN_PKCS1_4096_SHA512";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignRawPkcs12048"] = "RSA_SIGN_RAW_PKCS1_2048";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignRawPkcs13072"] = "RSA_SIGN_RAW_PKCS1_3072";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaSignRawPkcs14096"] = "RSA_SIGN_RAW_PKCS1_4096";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep2048Sha256"] = "RSA_DECRYPT_OAEP_2048_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep3072Sha256"] = "RSA_DECRYPT_OAEP_3072_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep4096Sha256"] = "RSA_DECRYPT_OAEP_4096_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep4096Sha512"] = "RSA_DECRYPT_OAEP_4096_SHA512";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep2048Sha1"] = "RSA_DECRYPT_OAEP_2048_SHA1";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep3072Sha1"] = "RSA_DECRYPT_OAEP_3072_SHA1";
    ImportCryptoKeyVersionRequestAlgorithmEnum["RsaDecryptOaep4096Sha1"] = "RSA_DECRYPT_OAEP_4096_SHA1";
    ImportCryptoKeyVersionRequestAlgorithmEnum["EcSignP256Sha256"] = "EC_SIGN_P256_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["EcSignP384Sha384"] = "EC_SIGN_P384_SHA384";
    ImportCryptoKeyVersionRequestAlgorithmEnum["EcSignSecp256K1Sha256"] = "EC_SIGN_SECP256K1_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["HmacSha256"] = "HMAC_SHA256";
    ImportCryptoKeyVersionRequestAlgorithmEnum["ExternalSymmetricEncryption"] = "EXTERNAL_SYMMETRIC_ENCRYPTION";
})(ImportCryptoKeyVersionRequestAlgorithmEnum || (ImportCryptoKeyVersionRequestAlgorithmEnum = {}));
// ImportCryptoKeyVersionRequest
/**
 * Request message for KeyManagementService.ImportCryptoKeyVersion.
**/
var ImportCryptoKeyVersionRequest = /** @class */ (function (_super) {
    __extends(ImportCryptoKeyVersionRequest, _super);
    function ImportCryptoKeyVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], ImportCryptoKeyVersionRequest.prototype, "algorithm", void 0);
    __decorate([
        Metadata({ data: "json, name=cryptoKeyVersion" }),
        __metadata("design:type", String)
    ], ImportCryptoKeyVersionRequest.prototype, "cryptoKeyVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=importJob" }),
        __metadata("design:type", String)
    ], ImportCryptoKeyVersionRequest.prototype, "importJob", void 0);
    __decorate([
        Metadata({ data: "json, name=rsaAesWrappedKey" }),
        __metadata("design:type", String)
    ], ImportCryptoKeyVersionRequest.prototype, "rsaAesWrappedKey", void 0);
    __decorate([
        Metadata({ data: "json, name=wrappedKey" }),
        __metadata("design:type", String)
    ], ImportCryptoKeyVersionRequest.prototype, "wrappedKey", void 0);
    return ImportCryptoKeyVersionRequest;
}(SpeakeasyBase));
export { ImportCryptoKeyVersionRequest };
