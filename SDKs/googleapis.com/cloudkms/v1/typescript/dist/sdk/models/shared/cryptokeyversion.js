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
import { KeyOperationAttestation } from "./keyoperationattestation";
import { ExternalProtectionLevelOptions } from "./externalprotectionleveloptions";
import { KeyOperationAttestationInput } from "./keyoperationattestation";
export var CryptoKeyVersionAlgorithmEnum;
(function (CryptoKeyVersionAlgorithmEnum) {
    CryptoKeyVersionAlgorithmEnum["CryptoKeyVersionAlgorithmUnspecified"] = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED";
    CryptoKeyVersionAlgorithmEnum["GoogleSymmetricEncryption"] = "GOOGLE_SYMMETRIC_ENCRYPTION";
    CryptoKeyVersionAlgorithmEnum["RsaSignPss2048Sha256"] = "RSA_SIGN_PSS_2048_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPss3072Sha256"] = "RSA_SIGN_PSS_3072_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPss4096Sha256"] = "RSA_SIGN_PSS_4096_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPss4096Sha512"] = "RSA_SIGN_PSS_4096_SHA512";
    CryptoKeyVersionAlgorithmEnum["RsaSignPkcs12048Sha256"] = "RSA_SIGN_PKCS1_2048_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPkcs13072Sha256"] = "RSA_SIGN_PKCS1_3072_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPkcs14096Sha256"] = "RSA_SIGN_PKCS1_4096_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaSignPkcs14096Sha512"] = "RSA_SIGN_PKCS1_4096_SHA512";
    CryptoKeyVersionAlgorithmEnum["RsaSignRawPkcs12048"] = "RSA_SIGN_RAW_PKCS1_2048";
    CryptoKeyVersionAlgorithmEnum["RsaSignRawPkcs13072"] = "RSA_SIGN_RAW_PKCS1_3072";
    CryptoKeyVersionAlgorithmEnum["RsaSignRawPkcs14096"] = "RSA_SIGN_RAW_PKCS1_4096";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep2048Sha256"] = "RSA_DECRYPT_OAEP_2048_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep3072Sha256"] = "RSA_DECRYPT_OAEP_3072_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep4096Sha256"] = "RSA_DECRYPT_OAEP_4096_SHA256";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep4096Sha512"] = "RSA_DECRYPT_OAEP_4096_SHA512";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep2048Sha1"] = "RSA_DECRYPT_OAEP_2048_SHA1";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep3072Sha1"] = "RSA_DECRYPT_OAEP_3072_SHA1";
    CryptoKeyVersionAlgorithmEnum["RsaDecryptOaep4096Sha1"] = "RSA_DECRYPT_OAEP_4096_SHA1";
    CryptoKeyVersionAlgorithmEnum["EcSignP256Sha256"] = "EC_SIGN_P256_SHA256";
    CryptoKeyVersionAlgorithmEnum["EcSignP384Sha384"] = "EC_SIGN_P384_SHA384";
    CryptoKeyVersionAlgorithmEnum["EcSignSecp256K1Sha256"] = "EC_SIGN_SECP256K1_SHA256";
    CryptoKeyVersionAlgorithmEnum["HmacSha256"] = "HMAC_SHA256";
    CryptoKeyVersionAlgorithmEnum["HmacSha1"] = "HMAC_SHA1";
    CryptoKeyVersionAlgorithmEnum["HmacSha384"] = "HMAC_SHA384";
    CryptoKeyVersionAlgorithmEnum["HmacSha512"] = "HMAC_SHA512";
    CryptoKeyVersionAlgorithmEnum["HmacSha224"] = "HMAC_SHA224";
    CryptoKeyVersionAlgorithmEnum["ExternalSymmetricEncryption"] = "EXTERNAL_SYMMETRIC_ENCRYPTION";
})(CryptoKeyVersionAlgorithmEnum || (CryptoKeyVersionAlgorithmEnum = {}));
export var CryptoKeyVersionProtectionLevelEnum;
(function (CryptoKeyVersionProtectionLevelEnum) {
    CryptoKeyVersionProtectionLevelEnum["ProtectionLevelUnspecified"] = "PROTECTION_LEVEL_UNSPECIFIED";
    CryptoKeyVersionProtectionLevelEnum["Software"] = "SOFTWARE";
    CryptoKeyVersionProtectionLevelEnum["Hsm"] = "HSM";
    CryptoKeyVersionProtectionLevelEnum["External"] = "EXTERNAL";
    CryptoKeyVersionProtectionLevelEnum["ExternalVpc"] = "EXTERNAL_VPC";
})(CryptoKeyVersionProtectionLevelEnum || (CryptoKeyVersionProtectionLevelEnum = {}));
export var CryptoKeyVersionStateEnum;
(function (CryptoKeyVersionStateEnum) {
    CryptoKeyVersionStateEnum["CryptoKeyVersionStateUnspecified"] = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED";
    CryptoKeyVersionStateEnum["PendingGeneration"] = "PENDING_GENERATION";
    CryptoKeyVersionStateEnum["Enabled"] = "ENABLED";
    CryptoKeyVersionStateEnum["Disabled"] = "DISABLED";
    CryptoKeyVersionStateEnum["Destroyed"] = "DESTROYED";
    CryptoKeyVersionStateEnum["DestroyScheduled"] = "DESTROY_SCHEDULED";
    CryptoKeyVersionStateEnum["PendingImport"] = "PENDING_IMPORT";
    CryptoKeyVersionStateEnum["ImportFailed"] = "IMPORT_FAILED";
})(CryptoKeyVersionStateEnum || (CryptoKeyVersionStateEnum = {}));
// CryptoKeyVersion
/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
**/
var CryptoKeyVersion = /** @class */ (function (_super) {
    __extends(CryptoKeyVersion, _super);
    function CryptoKeyVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", KeyOperationAttestation)
    ], CryptoKeyVersion.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destroyEventTime" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "destroyEventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destroyTime" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "destroyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalProtectionLevelOptions" }),
        __metadata("design:type", ExternalProtectionLevelOptions)
    ], CryptoKeyVersion.prototype, "externalProtectionLevelOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generateTime" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "generateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importFailureReason" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "importFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importJob" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "importJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importTime" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "importTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "protectionLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reimportEligible" }),
        __metadata("design:type", Boolean)
    ], CryptoKeyVersion.prototype, "reimportEligible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CryptoKeyVersion.prototype, "state", void 0);
    return CryptoKeyVersion;
}(SpeakeasyBase));
export { CryptoKeyVersion };
// CryptoKeyVersionInput
/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
**/
var CryptoKeyVersionInput = /** @class */ (function (_super) {
    __extends(CryptoKeyVersionInput, _super);
    function CryptoKeyVersionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", KeyOperationAttestationInput)
    ], CryptoKeyVersionInput.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalProtectionLevelOptions" }),
        __metadata("design:type", ExternalProtectionLevelOptions)
    ], CryptoKeyVersionInput.prototype, "externalProtectionLevelOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CryptoKeyVersionInput.prototype, "state", void 0);
    return CryptoKeyVersionInput;
}(SpeakeasyBase));
export { CryptoKeyVersionInput };
