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
import { GooglePrivacyDlpV2TransformationConfig } from "./googleprivacydlpv2transformationconfig";
import { GooglePrivacyDlpV2TransformationDetailsStorageConfig } from "./googleprivacydlpv2transformationdetailsstorageconfig";
export var GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum;
(function (GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum) {
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["FileTypeUnspecified"] = "FILE_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["BinaryFile"] = "BINARY_FILE";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["TextFile"] = "TEXT_FILE";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Image"] = "IMAGE";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Word"] = "WORD";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Pdf"] = "PDF";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Avro"] = "AVRO";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Csv"] = "CSV";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Tsv"] = "TSV";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Powerpoint"] = "POWERPOINT";
    GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum["Excel"] = "EXCEL";
})(GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum || (GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = {}));
// GooglePrivacyDlpV2Deidentify
/**
 * Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
**/
var GooglePrivacyDlpV2Deidentify = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Deidentify, _super);
    function GooglePrivacyDlpV2Deidentify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudStorageOutput" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Deidentify.prototype, "cloudStorageOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileTypesToTransform" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2Deidentify.prototype, "fileTypesToTransform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformationConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2TransformationConfig)
    ], GooglePrivacyDlpV2Deidentify.prototype, "transformationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformationDetailsStorageConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2TransformationDetailsStorageConfig)
    ], GooglePrivacyDlpV2Deidentify.prototype, "transformationDetailsStorageConfig", void 0);
    return GooglePrivacyDlpV2Deidentify;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2Deidentify };
