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
// GooglePrivacyDlpV2KmsWrappedCryptoKey
/**
 * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
**/
var GooglePrivacyDlpV2KmsWrappedCryptoKey = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2KmsWrappedCryptoKey, _super);
    function GooglePrivacyDlpV2KmsWrappedCryptoKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KmsWrappedCryptoKey.prototype, "cryptoKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrappedKey" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KmsWrappedCryptoKey.prototype, "wrappedKey", void 0);
    return GooglePrivacyDlpV2KmsWrappedCryptoKey;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2KmsWrappedCryptoKey };
