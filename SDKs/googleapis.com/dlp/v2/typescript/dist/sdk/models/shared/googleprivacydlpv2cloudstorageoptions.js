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
import { GooglePrivacyDlpV2FileSet } from "./googleprivacydlpv2fileset";
export var GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum;
(function (GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum) {
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["FileTypeUnspecified"] = "FILE_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["BinaryFile"] = "BINARY_FILE";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["TextFile"] = "TEXT_FILE";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Image"] = "IMAGE";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Word"] = "WORD";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Pdf"] = "PDF";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Avro"] = "AVRO";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Csv"] = "CSV";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Tsv"] = "TSV";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Powerpoint"] = "POWERPOINT";
    GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum["Excel"] = "EXCEL";
})(GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum || (GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = {}));
export var GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum;
(function (GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum) {
    GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum["SampleMethodUnspecified"] = "SAMPLE_METHOD_UNSPECIFIED";
    GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum["Top"] = "TOP";
    GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum["RandomStart"] = "RANDOM_START";
})(GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum || (GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum = {}));
// GooglePrivacyDlpV2CloudStorageOptions
/**
 * Options defining a file or a set of files within a Cloud Storage bucket.
**/
var GooglePrivacyDlpV2CloudStorageOptions = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CloudStorageOptions, _super);
    function GooglePrivacyDlpV2CloudStorageOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bytesLimitPerFile" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "bytesLimitPerFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bytesLimitPerFilePercent" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "bytesLimitPerFilePercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSet" }),
        __metadata("design:type", GooglePrivacyDlpV2FileSet)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "fileSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileTypes" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "fileTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesLimitPercent" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "filesLimitPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleMethod" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CloudStorageOptions.prototype, "sampleMethod", void 0);
    return GooglePrivacyDlpV2CloudStorageOptions;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CloudStorageOptions };
