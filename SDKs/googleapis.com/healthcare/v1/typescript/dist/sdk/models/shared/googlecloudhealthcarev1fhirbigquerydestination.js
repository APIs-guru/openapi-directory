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
import { SchemaConfig } from "./schemaconfig";
export var GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum;
(function (GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum) {
    GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum["WriteDispositionUnspecified"] = "WRITE_DISPOSITION_UNSPECIFIED";
    GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum["WriteEmpty"] = "WRITE_EMPTY";
    GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum["WriteTruncate"] = "WRITE_TRUNCATE";
    GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum["WriteAppend"] = "WRITE_APPEND";
})(GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum || (GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum = {}));
// GoogleCloudHealthcareV1FhirBigQueryDestination
/**
 * The configuration for exporting to BigQuery.
**/
var GoogleCloudHealthcareV1FhirBigQueryDestination = /** @class */ (function (_super) {
    __extends(GoogleCloudHealthcareV1FhirBigQueryDestination, _super);
    function GoogleCloudHealthcareV1FhirBigQueryDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasetUri" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1FhirBigQueryDestination.prototype, "datasetUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudHealthcareV1FhirBigQueryDestination.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaConfig" }),
        __metadata("design:type", SchemaConfig)
    ], GoogleCloudHealthcareV1FhirBigQueryDestination.prototype, "schemaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1FhirBigQueryDestination.prototype, "writeDisposition", void 0);
    return GoogleCloudHealthcareV1FhirBigQueryDestination;
}(SpeakeasyBase));
export { GoogleCloudHealthcareV1FhirBigQueryDestination };
