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
export var GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum;
(function (GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum) {
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["CommonCharsToIgnoreUnspecified"] = "COMMON_CHARS_TO_IGNORE_UNSPECIFIED";
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["Numeric"] = "NUMERIC";
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["AlphaUpperCase"] = "ALPHA_UPPER_CASE";
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["AlphaLowerCase"] = "ALPHA_LOWER_CASE";
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["Punctuation"] = "PUNCTUATION";
    GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum["Whitespace"] = "WHITESPACE";
})(GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum || (GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum = {}));
// GooglePrivacyDlpV2CharsToIgnore
/**
 * Characters to skip when doing deidentification of a value. These will be left alone and skipped.
**/
var GooglePrivacyDlpV2CharsToIgnore = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CharsToIgnore, _super);
    function GooglePrivacyDlpV2CharsToIgnore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=charactersToSkip" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CharsToIgnore.prototype, "charactersToSkip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonCharactersToIgnore" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CharsToIgnore.prototype, "commonCharactersToIgnore", void 0);
    return GooglePrivacyDlpV2CharsToIgnore;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CharsToIgnore };
