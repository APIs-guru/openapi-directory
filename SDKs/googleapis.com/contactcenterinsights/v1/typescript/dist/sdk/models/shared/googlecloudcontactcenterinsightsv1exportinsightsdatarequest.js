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
import { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination } from "./googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination";
export var GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
(function (GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum) {
    GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum["WriteDispositionUnspecified"] = "WRITE_DISPOSITION_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum["WriteTruncate"] = "WRITE_TRUNCATE";
    GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum["WriteAppend"] = "WRITE_APPEND";
})(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum || (GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = {}));
// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
/**
 * The request to export insights.
**/
var GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest, _super);
    function GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigQueryDestination" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination)
    ], GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.prototype, "bigQueryDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.prototype, "kmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.prototype, "writeDisposition", void 0);
    return GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest };
