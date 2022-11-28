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
export var MetricRequestMetricEnum;
(function (MetricRequestMetricEnum) {
    MetricRequestMetricEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    MetricRequestMetricEnum["All"] = "ALL";
    MetricRequestMetricEnum["QueriesDirect"] = "QUERIES_DIRECT";
    MetricRequestMetricEnum["QueriesIndirect"] = "QUERIES_INDIRECT";
    MetricRequestMetricEnum["QueriesChain"] = "QUERIES_CHAIN";
    MetricRequestMetricEnum["ViewsMaps"] = "VIEWS_MAPS";
    MetricRequestMetricEnum["ViewsSearch"] = "VIEWS_SEARCH";
    MetricRequestMetricEnum["ActionsWebsite"] = "ACTIONS_WEBSITE";
    MetricRequestMetricEnum["ActionsPhone"] = "ACTIONS_PHONE";
    MetricRequestMetricEnum["ActionsDrivingDirections"] = "ACTIONS_DRIVING_DIRECTIONS";
    MetricRequestMetricEnum["PhotosViewsMerchant"] = "PHOTOS_VIEWS_MERCHANT";
    MetricRequestMetricEnum["PhotosViewsCustomers"] = "PHOTOS_VIEWS_CUSTOMERS";
    MetricRequestMetricEnum["PhotosCountMerchant"] = "PHOTOS_COUNT_MERCHANT";
    MetricRequestMetricEnum["PhotosCountCustomers"] = "PHOTOS_COUNT_CUSTOMERS";
    MetricRequestMetricEnum["LocalPostViewsSearch"] = "LOCAL_POST_VIEWS_SEARCH";
    MetricRequestMetricEnum["LocalPostActionsCallToAction"] = "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
})(MetricRequestMetricEnum || (MetricRequestMetricEnum = {}));
export var MetricRequestOptionsEnum;
(function (MetricRequestOptionsEnum) {
    MetricRequestOptionsEnum["MetricOptionUnspecified"] = "METRIC_OPTION_UNSPECIFIED";
    MetricRequestOptionsEnum["AggregatedTotal"] = "AGGREGATED_TOTAL";
    MetricRequestOptionsEnum["AggregatedDaily"] = "AGGREGATED_DAILY";
    MetricRequestOptionsEnum["BreakdownDayOfWeek"] = "BREAKDOWN_DAY_OF_WEEK";
    MetricRequestOptionsEnum["BreakdownHourOfDay"] = "BREAKDOWN_HOUR_OF_DAY";
})(MetricRequestOptionsEnum || (MetricRequestOptionsEnum = {}));
// MetricRequest
/**
 * A request to return values for one metric and the options for how those values should be returned.
**/
var MetricRequest = /** @class */ (function (_super) {
    __extends(MetricRequest, _super);
    function MetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", String)
    ], MetricRequest.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], MetricRequest.prototype, "options", void 0);
    return MetricRequest;
}(SpeakeasyBase));
export { MetricRequest };
