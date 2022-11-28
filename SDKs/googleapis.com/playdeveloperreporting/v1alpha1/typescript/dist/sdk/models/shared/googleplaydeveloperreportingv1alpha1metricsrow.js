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
import { GoogleTypeDateTime } from "./googletypedatetime";
export var GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum;
(function (GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum) {
    GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum["AggregationPeriodUnspecified"] = "AGGREGATION_PERIOD_UNSPECIFIED";
    GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum["Hourly"] = "HOURLY";
    GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum["Daily"] = "DAILY";
})(GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum || (GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum = {}));
// GooglePlayDeveloperReportingV1alpha1MetricsRow
/**
 * Represents a row of dimensions and metrics.
**/
var GooglePlayDeveloperReportingV1alpha1MetricsRow = /** @class */ (function (_super) {
    __extends(GooglePlayDeveloperReportingV1alpha1MetricsRow, _super);
    function GooglePlayDeveloperReportingV1alpha1MetricsRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1alpha1MetricsRow.prototype, "aggregationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GooglePlayDeveloperReportingV1alpha1DimensionValue }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1alpha1MetricsRow.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: GooglePlayDeveloperReportingV1alpha1MetricValue }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1alpha1MetricsRow.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", GoogleTypeDateTime)
    ], GooglePlayDeveloperReportingV1alpha1MetricsRow.prototype, "startTime", void 0);
    return GooglePlayDeveloperReportingV1alpha1MetricsRow;
}(SpeakeasyBase));
export { GooglePlayDeveloperReportingV1alpha1MetricsRow };
