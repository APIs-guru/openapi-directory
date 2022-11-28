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
import { GooglePrivacyDlpV2BigQueryField } from "./googleprivacydlpv2bigqueryfield";
import { GooglePrivacyDlpV2CloudStorageFileSet } from "./googleprivacydlpv2cloudstoragefileset";
import { GooglePrivacyDlpV2CloudStoragePath } from "./googleprivacydlpv2cloudstoragepath";
// GooglePrivacyDlpV2LargeCustomDictionaryConfig
/**
 * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
**/
var GooglePrivacyDlpV2LargeCustomDictionaryConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2LargeCustomDictionaryConfig, _super);
    function GooglePrivacyDlpV2LargeCustomDictionaryConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigQueryField" }),
        __metadata("design:type", GooglePrivacyDlpV2BigQueryField)
    ], GooglePrivacyDlpV2LargeCustomDictionaryConfig.prototype, "bigQueryField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudStorageFileSet" }),
        __metadata("design:type", GooglePrivacyDlpV2CloudStorageFileSet)
    ], GooglePrivacyDlpV2LargeCustomDictionaryConfig.prototype, "cloudStorageFileSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputPath" }),
        __metadata("design:type", GooglePrivacyDlpV2CloudStoragePath)
    ], GooglePrivacyDlpV2LargeCustomDictionaryConfig.prototype, "outputPath", void 0);
    return GooglePrivacyDlpV2LargeCustomDictionaryConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2LargeCustomDictionaryConfig };
