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
import { DimensionalMetricValue } from "./dimensionalmetricvalue";
export var MetricValueMetricEnum;
(function (MetricValueMetricEnum) {
    MetricValueMetricEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    MetricValueMetricEnum["All"] = "ALL";
    MetricValueMetricEnum["QueriesDirect"] = "QUERIES_DIRECT";
    MetricValueMetricEnum["QueriesIndirect"] = "QUERIES_INDIRECT";
    MetricValueMetricEnum["QueriesChain"] = "QUERIES_CHAIN";
    MetricValueMetricEnum["ViewsMaps"] = "VIEWS_MAPS";
    MetricValueMetricEnum["ViewsSearch"] = "VIEWS_SEARCH";
    MetricValueMetricEnum["ActionsWebsite"] = "ACTIONS_WEBSITE";
    MetricValueMetricEnum["ActionsPhone"] = "ACTIONS_PHONE";
    MetricValueMetricEnum["ActionsDrivingDirections"] = "ACTIONS_DRIVING_DIRECTIONS";
    MetricValueMetricEnum["PhotosViewsMerchant"] = "PHOTOS_VIEWS_MERCHANT";
    MetricValueMetricEnum["PhotosViewsCustomers"] = "PHOTOS_VIEWS_CUSTOMERS";
    MetricValueMetricEnum["PhotosCountMerchant"] = "PHOTOS_COUNT_MERCHANT";
    MetricValueMetricEnum["PhotosCountCustomers"] = "PHOTOS_COUNT_CUSTOMERS";
    MetricValueMetricEnum["LocalPostViewsSearch"] = "LOCAL_POST_VIEWS_SEARCH";
    MetricValueMetricEnum["LocalPostActionsCallToAction"] = "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
})(MetricValueMetricEnum || (MetricValueMetricEnum = {}));
// MetricValue
/**
 * A value for a single Metric from a starting time.
**/
var MetricValue = /** @class */ (function (_super) {
    __extends(MetricValue, _super);
    function MetricValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionalValues", elemType: DimensionalMetricValue }),
        __metadata("design:type", Array)
    ], MetricValue.prototype, "dimensionalValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", String)
    ], MetricValue.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalValue" }),
        __metadata("design:type", DimensionalMetricValue)
    ], MetricValue.prototype, "totalValue", void 0);
    return MetricValue;
}(SpeakeasyBase));
export { MetricValue };
