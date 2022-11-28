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
import { GooglePrivacyDlpV2CharsToIgnore } from "./googleprivacydlpv2charstoignore";
// GooglePrivacyDlpV2CharacterMaskConfig
/**
 * Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
**/
var GooglePrivacyDlpV2CharacterMaskConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CharacterMaskConfig, _super);
    function GooglePrivacyDlpV2CharacterMaskConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=charactersToIgnore", elemType: GooglePrivacyDlpV2CharsToIgnore }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2CharacterMaskConfig.prototype, "charactersToIgnore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskingCharacter" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CharacterMaskConfig.prototype, "maskingCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberToMask" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2CharacterMaskConfig.prototype, "numberToMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reverseOrder" }),
        __metadata("design:type", Boolean)
    ], GooglePrivacyDlpV2CharacterMaskConfig.prototype, "reverseOrder", void 0);
    return GooglePrivacyDlpV2CharacterMaskConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CharacterMaskConfig };
