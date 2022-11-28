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
import { GooglePrivacyDlpV2CloudStoragePath } from "./googleprivacydlpv2cloudstoragepath";
import { GooglePrivacyDlpV2WordList } from "./googleprivacydlpv2wordlist";
// GooglePrivacyDlpV2Dictionary
/**
 * Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
**/
var GooglePrivacyDlpV2Dictionary = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Dictionary, _super);
    function GooglePrivacyDlpV2Dictionary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudStoragePath" }),
        __metadata("design:type", GooglePrivacyDlpV2CloudStoragePath)
    ], GooglePrivacyDlpV2Dictionary.prototype, "cloudStoragePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wordList" }),
        __metadata("design:type", GooglePrivacyDlpV2WordList)
    ], GooglePrivacyDlpV2Dictionary.prototype, "wordList", void 0);
    return GooglePrivacyDlpV2Dictionary;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2Dictionary };
