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
export var GoogleCloudMlV1PredictionInputDataFormatEnum;
(function (GoogleCloudMlV1PredictionInputDataFormatEnum) {
    GoogleCloudMlV1PredictionInputDataFormatEnum["DataFormatUnspecified"] = "DATA_FORMAT_UNSPECIFIED";
    GoogleCloudMlV1PredictionInputDataFormatEnum["Json"] = "JSON";
    GoogleCloudMlV1PredictionInputDataFormatEnum["Text"] = "TEXT";
    GoogleCloudMlV1PredictionInputDataFormatEnum["TfRecord"] = "TF_RECORD";
    GoogleCloudMlV1PredictionInputDataFormatEnum["TfRecordGzip"] = "TF_RECORD_GZIP";
    GoogleCloudMlV1PredictionInputDataFormatEnum["Csv"] = "CSV";
})(GoogleCloudMlV1PredictionInputDataFormatEnum || (GoogleCloudMlV1PredictionInputDataFormatEnum = {}));
export var GoogleCloudMlV1PredictionInputOutputDataFormatEnum;
(function (GoogleCloudMlV1PredictionInputOutputDataFormatEnum) {
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["DataFormatUnspecified"] = "DATA_FORMAT_UNSPECIFIED";
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["Json"] = "JSON";
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["Text"] = "TEXT";
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["TfRecord"] = "TF_RECORD";
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["TfRecordGzip"] = "TF_RECORD_GZIP";
    GoogleCloudMlV1PredictionInputOutputDataFormatEnum["Csv"] = "CSV";
})(GoogleCloudMlV1PredictionInputOutputDataFormatEnum || (GoogleCloudMlV1PredictionInputOutputDataFormatEnum = {}));
// GoogleCloudMlV1PredictionInput
/**
 * Represents input parameters for a prediction job.
**/
var GoogleCloudMlV1PredictionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1PredictionInput, _super);
    function GoogleCloudMlV1PredictionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchSize" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "dataFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputPaths" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1PredictionInput.prototype, "inputPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxWorkerCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "maxWorkerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelName" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputDataFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "outputDataFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputPath" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "outputPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signatureName" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "signatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionName" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1PredictionInput.prototype, "versionName", void 0);
    return GoogleCloudMlV1PredictionInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1PredictionInput };
