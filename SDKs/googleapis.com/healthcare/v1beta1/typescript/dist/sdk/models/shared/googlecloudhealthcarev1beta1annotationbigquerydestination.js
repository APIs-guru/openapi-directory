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
export var GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum;
(function (GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum) {
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum["SchemaTypeUnspecified"] = "SCHEMA_TYPE_UNSPECIFIED";
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum["Simple"] = "SIMPLE";
})(GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum || (GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum = {}));
export var GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum;
(function (GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum) {
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum["WriteDispositionUnspecified"] = "WRITE_DISPOSITION_UNSPECIFIED";
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum["WriteEmpty"] = "WRITE_EMPTY";
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum["WriteTruncate"] = "WRITE_TRUNCATE";
    GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum["WriteAppend"] = "WRITE_APPEND";
})(GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum || (GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum = {}));
// GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination
/**
 * The BigQuery table for export.
**/
var GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination = /** @class */ (function (_super) {
    __extends(GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination, _super);
    function GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaType" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.prototype, "schemaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableUri" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.prototype, "tableUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.prototype, "writeDisposition", void 0);
    return GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination;
}(SpeakeasyBase));
export { GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination };
