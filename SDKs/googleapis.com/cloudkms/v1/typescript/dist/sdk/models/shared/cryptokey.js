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
import { CryptoKeyVersionInput } from "./cryptokeyversion";
import { CryptoKeyVersionTemplate } from "./cryptokeyversiontemplate";
import { CryptoKeyVersion } from "./cryptokeyversion";
export var CryptoKeyPurposeEnum;
(function (CryptoKeyPurposeEnum) {
    CryptoKeyPurposeEnum["CryptoKeyPurposeUnspecified"] = "CRYPTO_KEY_PURPOSE_UNSPECIFIED";
    CryptoKeyPurposeEnum["EncryptDecrypt"] = "ENCRYPT_DECRYPT";
    CryptoKeyPurposeEnum["AsymmetricSign"] = "ASYMMETRIC_SIGN";
    CryptoKeyPurposeEnum["AsymmetricDecrypt"] = "ASYMMETRIC_DECRYPT";
    CryptoKeyPurposeEnum["Mac"] = "MAC";
})(CryptoKeyPurposeEnum || (CryptoKeyPurposeEnum = {}));
// CryptoKeyInput
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
var CryptoKeyInput = /** @class */ (function (_super) {
    __extends(CryptoKeyInput, _super);
    function CryptoKeyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyBackend" }),
        __metadata("design:type", String)
    ], CryptoKeyInput.prototype, "cryptoKeyBackend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destroyScheduledDuration" }),
        __metadata("design:type", String)
    ], CryptoKeyInput.prototype, "destroyScheduledDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importOnly" }),
        __metadata("design:type", Boolean)
    ], CryptoKeyInput.prototype, "importOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CryptoKeyInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextRotationTime" }),
        __metadata("design:type", String)
    ], CryptoKeyInput.prototype, "nextRotationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", CryptoKeyVersionInput)
    ], CryptoKeyInput.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], CryptoKeyInput.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotationPeriod" }),
        __metadata("design:type", String)
    ], CryptoKeyInput.prototype, "rotationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTemplate" }),
        __metadata("design:type", CryptoKeyVersionTemplate)
    ], CryptoKeyInput.prototype, "versionTemplate", void 0);
    return CryptoKeyInput;
}(SpeakeasyBase));
export { CryptoKeyInput };
// CryptoKey
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
var CryptoKey = /** @class */ (function (_super) {
    __extends(CryptoKey, _super);
    function CryptoKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyBackend" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "cryptoKeyBackend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destroyScheduledDuration" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "destroyScheduledDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importOnly" }),
        __metadata("design:type", Boolean)
    ], CryptoKey.prototype, "importOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CryptoKey.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextRotationTime" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "nextRotationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", CryptoKeyVersion)
    ], CryptoKey.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotationPeriod" }),
        __metadata("design:type", String)
    ], CryptoKey.prototype, "rotationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTemplate" }),
        __metadata("design:type", CryptoKeyVersionTemplate)
    ], CryptoKey.prototype, "versionTemplate", void 0);
    return CryptoKey;
}(SpeakeasyBase));
export { CryptoKey };
