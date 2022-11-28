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
import { GoogleCloudDataplexV1StorageFormatCsvOptions } from "./googleclouddataplexv1storageformatcsvoptions";
import { GoogleCloudDataplexV1StorageFormatJsonOptions } from "./googleclouddataplexv1storageformatjsonoptions";
export var GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
(function (GoogleCloudDataplexV1StorageFormatCompressionFormatEnum) {
    GoogleCloudDataplexV1StorageFormatCompressionFormatEnum["CompressionFormatUnspecified"] = "COMPRESSION_FORMAT_UNSPECIFIED";
    GoogleCloudDataplexV1StorageFormatCompressionFormatEnum["Gzip"] = "GZIP";
    GoogleCloudDataplexV1StorageFormatCompressionFormatEnum["Bzip2"] = "BZIP2";
})(GoogleCloudDataplexV1StorageFormatCompressionFormatEnum || (GoogleCloudDataplexV1StorageFormatCompressionFormatEnum = {}));
export var GoogleCloudDataplexV1StorageFormatFormatEnum;
(function (GoogleCloudDataplexV1StorageFormatFormatEnum) {
    GoogleCloudDataplexV1StorageFormatFormatEnum["FormatUnspecified"] = "FORMAT_UNSPECIFIED";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Parquet"] = "PARQUET";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Avro"] = "AVRO";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Orc"] = "ORC";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Csv"] = "CSV";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Json"] = "JSON";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Image"] = "IMAGE";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Audio"] = "AUDIO";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Video"] = "VIDEO";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Text"] = "TEXT";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Tfrecord"] = "TFRECORD";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Other"] = "OTHER";
    GoogleCloudDataplexV1StorageFormatFormatEnum["Unknown"] = "UNKNOWN";
})(GoogleCloudDataplexV1StorageFormatFormatEnum || (GoogleCloudDataplexV1StorageFormatFormatEnum = {}));
// GoogleCloudDataplexV1StorageFormatInput
/**
 * Describes the format of the data within its storage location.
**/
var GoogleCloudDataplexV1StorageFormatInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1StorageFormatInput, _super);
    function GoogleCloudDataplexV1StorageFormatInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compressionFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1StorageFormatInput.prototype, "compressionFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormatCsvOptions)
    ], GoogleCloudDataplexV1StorageFormatInput.prototype, "csv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=json" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormatJsonOptions)
    ], GoogleCloudDataplexV1StorageFormatInput.prototype, "json", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1StorageFormatInput.prototype, "mimeType", void 0);
    return GoogleCloudDataplexV1StorageFormatInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1StorageFormatInput };
// GoogleCloudDataplexV1StorageFormat
/**
 * Describes the format of the data within its storage location.
**/
var GoogleCloudDataplexV1StorageFormat = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1StorageFormat, _super);
    function GoogleCloudDataplexV1StorageFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compressionFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1StorageFormat.prototype, "compressionFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormatCsvOptions)
    ], GoogleCloudDataplexV1StorageFormat.prototype, "csv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1StorageFormat.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=json" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormatJsonOptions)
    ], GoogleCloudDataplexV1StorageFormat.prototype, "json", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1StorageFormat.prototype, "mimeType", void 0);
    return GoogleCloudDataplexV1StorageFormat;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1StorageFormat };
