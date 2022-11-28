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
import { GoogleTypeDateTime } from "./googletypedatetime";
export var GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum;
(function (GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum) {
    GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum["AggregationPeriodUnspecified"] = "AGGREGATION_PERIOD_UNSPECIFIED";
    GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum["Hourly"] = "HOURLY";
    GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum["Daily"] = "DAILY";
})(GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum || (GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = {}));
// GooglePlayDeveloperReportingV1beta1TimelineSpec
/**
 * Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.
**/
var GooglePlayDeveloperReportingV1beta1TimelineSpec = /** @class */ (function (_super) {
    __extends(GooglePlayDeveloperReportingV1beta1TimelineSpec, _super);
    function GooglePlayDeveloperReportingV1beta1TimelineSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1beta1TimelineSpec.prototype, "aggregationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", GoogleTypeDateTime)
    ], GooglePlayDeveloperReportingV1beta1TimelineSpec.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", GoogleTypeDateTime)
    ], GooglePlayDeveloperReportingV1beta1TimelineSpec.prototype, "startTime", void 0);
    return GooglePlayDeveloperReportingV1beta1TimelineSpec;
}(SpeakeasyBase));
export { GooglePlayDeveloperReportingV1beta1TimelineSpec };
