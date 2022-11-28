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
import { WrappingPublicKey } from "./wrappingpublickey";
import { KeyOperationAttestationInput } from "./keyoperationattestation";
export var ImportJobImportMethodEnum;
(function (ImportJobImportMethodEnum) {
    ImportJobImportMethodEnum["ImportMethodUnspecified"] = "IMPORT_METHOD_UNSPECIFIED";
    ImportJobImportMethodEnum["RsaOaep3072Sha1Aes256"] = "RSA_OAEP_3072_SHA1_AES_256";
    ImportJobImportMethodEnum["RsaOaep4096Sha1Aes256"] = "RSA_OAEP_4096_SHA1_AES_256";
    ImportJobImportMethodEnum["RsaOaep3072Sha256Aes256"] = "RSA_OAEP_3072_SHA256_AES_256";
    ImportJobImportMethodEnum["RsaOaep4096Sha256Aes256"] = "RSA_OAEP_4096_SHA256_AES_256";
    ImportJobImportMethodEnum["RsaOaep3072Sha256"] = "RSA_OAEP_3072_SHA256";
    ImportJobImportMethodEnum["RsaOaep4096Sha256"] = "RSA_OAEP_4096_SHA256";
})(ImportJobImportMethodEnum || (ImportJobImportMethodEnum = {}));
export var ImportJobProtectionLevelEnum;
(function (ImportJobProtectionLevelEnum) {
    ImportJobProtectionLevelEnum["ProtectionLevelUnspecified"] = "PROTECTION_LEVEL_UNSPECIFIED";
    ImportJobProtectionLevelEnum["Software"] = "SOFTWARE";
    ImportJobProtectionLevelEnum["Hsm"] = "HSM";
    ImportJobProtectionLevelEnum["External"] = "EXTERNAL";
    ImportJobProtectionLevelEnum["ExternalVpc"] = "EXTERNAL_VPC";
})(ImportJobProtectionLevelEnum || (ImportJobProtectionLevelEnum = {}));
export var ImportJobStateEnum;
(function (ImportJobStateEnum) {
    ImportJobStateEnum["ImportJobStateUnspecified"] = "IMPORT_JOB_STATE_UNSPECIFIED";
    ImportJobStateEnum["PendingGeneration"] = "PENDING_GENERATION";
    ImportJobStateEnum["Active"] = "ACTIVE";
    ImportJobStateEnum["Expired"] = "EXPIRED";
})(ImportJobStateEnum || (ImportJobStateEnum = {}));
// ImportJob
/**
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
var ImportJob = /** @class */ (function (_super) {
    __extends(ImportJob, _super);
    function ImportJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", KeyOperationAttestation)
    ], ImportJob.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireEventTime" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "expireEventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generateTime" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "generateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importMethod" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "importMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "protectionLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", WrappingPublicKey)
    ], ImportJob.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ImportJob.prototype, "state", void 0);
    return ImportJob;
}(SpeakeasyBase));
export { ImportJob };
// ImportJobInput
/**
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
var ImportJobInput = /** @class */ (function (_super) {
    __extends(ImportJobInput, _super);
    function ImportJobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", KeyOperationAttestationInput)
    ], ImportJobInput.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importMethod" }),
        __metadata("design:type", String)
    ], ImportJobInput.prototype, "importMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], ImportJobInput.prototype, "protectionLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", WrappingPublicKey)
    ], ImportJobInput.prototype, "publicKey", void 0);
    return ImportJobInput;
}(SpeakeasyBase));
export { ImportJobInput };
