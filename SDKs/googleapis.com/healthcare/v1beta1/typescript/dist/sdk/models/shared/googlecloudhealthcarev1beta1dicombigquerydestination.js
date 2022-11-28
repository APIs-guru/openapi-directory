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
export var GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum;
(function (GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum) {
    GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum["WriteDispositionUnspecified"] = "WRITE_DISPOSITION_UNSPECIFIED";
    GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum["WriteEmpty"] = "WRITE_EMPTY";
    GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum["WriteTruncate"] = "WRITE_TRUNCATE";
    GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum["WriteAppend"] = "WRITE_APPEND";
})(GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum || (GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum = {}));
// GoogleCloudHealthcareV1beta1DicomBigQueryDestination
/**
 * The BigQuery table where the server writes output.
**/
var GoogleCloudHealthcareV1beta1DicomBigQueryDestination = /** @class */ (function (_super) {
    __extends(GoogleCloudHealthcareV1beta1DicomBigQueryDestination, _super);
    function GoogleCloudHealthcareV1beta1DicomBigQueryDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudHealthcareV1beta1DicomBigQueryDestination.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableUri" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1beta1DicomBigQueryDestination.prototype, "tableUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], GoogleCloudHealthcareV1beta1DicomBigQueryDestination.prototype, "writeDisposition", void 0);
    return GoogleCloudHealthcareV1beta1DicomBigQueryDestination;
}(SpeakeasyBase));
export { GoogleCloudHealthcareV1beta1DicomBigQueryDestination };
