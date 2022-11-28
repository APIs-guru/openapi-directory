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
import { GooglePlayDeveloperReportingV1beta1TimelineSpec } from "./googleplaydeveloperreportingv1beta1timelinespec";
// GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest
/**
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
var GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest = /** @class */ (function (_super) {
    __extends(GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest, _super);
    function GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timelineSpec" }),
        __metadata("design:type", GooglePlayDeveloperReportingV1beta1TimelineSpec)
    ], GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest.prototype, "timelineSpec", void 0);
    return GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest;
}(SpeakeasyBase));
export { GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest };
