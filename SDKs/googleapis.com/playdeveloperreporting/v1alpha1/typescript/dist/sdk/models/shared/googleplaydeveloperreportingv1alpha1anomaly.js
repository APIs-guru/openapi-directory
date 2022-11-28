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
import { GooglePlayDeveloperReportingV1alpha1DimensionValue } from "./googleplaydeveloperreportingv1alpha1dimensionvalue";
import { GooglePlayDeveloperReportingV1alpha1MetricValue } from "./googleplaydeveloperreportingv1alpha1metricvalue";
import { GooglePlayDeveloperReportingV1alpha1TimelineSpec } from "./googleplaydeveloperreportingv1alpha1timelinespec";
// GooglePlayDeveloperReportingV1alpha1Anomaly
/**
 * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
var GooglePlayDeveloperReportingV1alpha1Anomaly = /** @class */ (function (_super) {
    __extends(GooglePlayDeveloperReportingV1alpha1Anomaly, _super);
    function GooglePlayDeveloperReportingV1alpha1Anomaly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GooglePlayDeveloperReportingV1alpha1DimensionValue }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1alpha1Anomaly.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", GooglePlayDeveloperReportingV1alpha1MetricValue)
    ], GooglePlayDeveloperReportingV1alpha1Anomaly.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricSet" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1alpha1Anomaly.prototype, "metricSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1alpha1Anomaly.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timelineSpec" }),
        __metadata("design:type", GooglePlayDeveloperReportingV1alpha1TimelineSpec)
    ], GooglePlayDeveloperReportingV1alpha1Anomaly.prototype, "timelineSpec", void 0);
    return GooglePlayDeveloperReportingV1alpha1Anomaly;
}(SpeakeasyBase));
export { GooglePlayDeveloperReportingV1alpha1Anomaly };
