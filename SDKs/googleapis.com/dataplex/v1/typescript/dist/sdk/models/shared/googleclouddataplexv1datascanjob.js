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
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";
export var GoogleCloudDataplexV1DataScanJobStateEnum;
(function (GoogleCloudDataplexV1DataScanJobStateEnum) {
    GoogleCloudDataplexV1DataScanJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1DataScanJobStateEnum["Running"] = "RUNNING";
    GoogleCloudDataplexV1DataScanJobStateEnum["Canceling"] = "CANCELING";
    GoogleCloudDataplexV1DataScanJobStateEnum["Cancelled"] = "CANCELLED";
    GoogleCloudDataplexV1DataScanJobStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudDataplexV1DataScanJobStateEnum["Failed"] = "FAILED";
    GoogleCloudDataplexV1DataScanJobStateEnum["Pending"] = "PENDING";
})(GoogleCloudDataplexV1DataScanJobStateEnum || (GoogleCloudDataplexV1DataScanJobStateEnum = {}));
export var GoogleCloudDataplexV1DataScanJobTypeEnum;
(function (GoogleCloudDataplexV1DataScanJobTypeEnum) {
    GoogleCloudDataplexV1DataScanJobTypeEnum["DataScanTypeUnspecified"] = "DATA_SCAN_TYPE_UNSPECIFIED";
    GoogleCloudDataplexV1DataScanJobTypeEnum["DataQuality"] = "DATA_QUALITY";
    GoogleCloudDataplexV1DataScanJobTypeEnum["DataProfile"] = "DATA_PROFILE";
})(GoogleCloudDataplexV1DataScanJobTypeEnum || (GoogleCloudDataplexV1DataScanJobTypeEnum = {}));
// GoogleCloudDataplexV1DataScanJob
/**
 * A DataScanJob represents an instance of a data scan.
**/
var GoogleCloudDataplexV1DataScanJob = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1DataScanJob, _super);
    function GoogleCloudDataplexV1DataScanJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProfileResult" }),
        __metadata("design:type", GoogleCloudDataplexV1DataProfileResult)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "dataProfileResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProfileSpec" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "dataProfileSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataQualityResult" }),
        __metadata("design:type", GoogleCloudDataplexV1DataQualityResult)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "dataQualityResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataQualitySpec" }),
        __metadata("design:type", GoogleCloudDataplexV1DataQualitySpec)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "dataQualitySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataScanJob.prototype, "uid", void 0);
    return GoogleCloudDataplexV1DataScanJob;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1DataScanJob };
