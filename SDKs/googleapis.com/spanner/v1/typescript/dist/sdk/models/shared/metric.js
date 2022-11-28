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
import { LocalizedString } from "./localizedstring";
import { DerivedMetric } from "./derivedmetric";
import { IndexedHotKey } from "./indexedhotkey";
import { IndexedKeyRangeInfos } from "./indexedkeyrangeinfos";
import { MetricMatrix } from "./metricmatrix";
export var MetricAggregationEnum;
(function (MetricAggregationEnum) {
    MetricAggregationEnum["AggregationUnspecified"] = "AGGREGATION_UNSPECIFIED";
    MetricAggregationEnum["Max"] = "MAX";
    MetricAggregationEnum["Sum"] = "SUM";
})(MetricAggregationEnum || (MetricAggregationEnum = {}));
// Metric
/**
 * A message representing the actual monitoring data, values for each key bucket over time, of a metric.
**/
var Metric = /** @class */ (function (_super) {
    __extends(Metric, _super);
    function Metric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregation" }),
        __metadata("design:type", String)
    ], Metric.prototype, "aggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", LocalizedString)
    ], Metric.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derived" }),
        __metadata("design:type", DerivedMetric)
    ], Metric.prototype, "derived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayLabel" }),
        __metadata("design:type", LocalizedString)
    ], Metric.prototype, "displayLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasNonzeroData" }),
        __metadata("design:type", Boolean)
    ], Metric.prototype, "hasNonzeroData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotValue" }),
        __metadata("design:type", Number)
    ], Metric.prototype, "hotValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexedHotKeys", elemType: IndexedHotKey }),
        __metadata("design:type", Map)
    ], Metric.prototype, "indexedHotKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexedKeyRangeInfos", elemType: IndexedKeyRangeInfos }),
        __metadata("design:type", Map)
    ], Metric.prototype, "indexedKeyRangeInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", LocalizedString)
    ], Metric.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matrix" }),
        __metadata("design:type", MetricMatrix)
    ], Metric.prototype, "matrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", LocalizedString)
    ], Metric.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], Metric.prototype, "visible", void 0);
    return Metric;
}(SpeakeasyBase));
export { Metric };
