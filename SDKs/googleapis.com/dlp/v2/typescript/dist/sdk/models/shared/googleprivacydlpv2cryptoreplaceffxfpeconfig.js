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
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
export var GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;
(function (GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum) {
    GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum["FfxCommonNativeAlphabetUnspecified"] = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED";
    GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum["Numeric"] = "NUMERIC";
    GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum["Hexadecimal"] = "HEXADECIMAL";
    GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum["UpperCaseAlphaNumeric"] = "UPPER_CASE_ALPHA_NUMERIC";
    GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum["AlphaNumeric"] = "ALPHA_NUMERIC";
})(GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum || (GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum = {}));
// GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
/**
 * Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
**/
var GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig, _super);
    function GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonAlphabet" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "commonAlphabet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", GooglePrivacyDlpV2FieldId)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKey" }),
        __metadata("design:type", GooglePrivacyDlpV2CryptoKey)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "cryptoKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAlphabet" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "customAlphabet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radix" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "radix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surrogateInfoType" }),
        __metadata("design:type", GooglePrivacyDlpV2InfoType)
    ], GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.prototype, "surrogateInfoType", void 0);
    return GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig };
