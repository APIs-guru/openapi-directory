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
import { HistogramSeries } from "./histogramseries";
export var HistogramChartSpecLegendPositionEnum;
(function (HistogramChartSpecLegendPositionEnum) {
    HistogramChartSpecLegendPositionEnum["HistogramChartLegendPositionUnspecified"] = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED";
    HistogramChartSpecLegendPositionEnum["BottomLegend"] = "BOTTOM_LEGEND";
    HistogramChartSpecLegendPositionEnum["LeftLegend"] = "LEFT_LEGEND";
    HistogramChartSpecLegendPositionEnum["RightLegend"] = "RIGHT_LEGEND";
    HistogramChartSpecLegendPositionEnum["TopLegend"] = "TOP_LEGEND";
    HistogramChartSpecLegendPositionEnum["NoLegend"] = "NO_LEGEND";
    HistogramChartSpecLegendPositionEnum["InsideLegend"] = "INSIDE_LEGEND";
})(HistogramChartSpecLegendPositionEnum || (HistogramChartSpecLegendPositionEnum = {}));
// HistogramChartSpec
/**
 * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
**/
var HistogramChartSpec = /** @class */ (function (_super) {
    __extends(HistogramChartSpec, _super);
    function HistogramChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketSize" }),
        __metadata("design:type", Number)
    ], HistogramChartSpec.prototype, "bucketSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legendPosition" }),
        __metadata("design:type", String)
    ], HistogramChartSpec.prototype, "legendPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlierPercentile" }),
        __metadata("design:type", Number)
    ], HistogramChartSpec.prototype, "outlierPercentile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series", elemType: HistogramSeries }),
        __metadata("design:type", Array)
    ], HistogramChartSpec.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showItemDividers" }),
        __metadata("design:type", Boolean)
    ], HistogramChartSpec.prototype, "showItemDividers", void 0);
    return HistogramChartSpec;
}(SpeakeasyBase));
export { HistogramChartSpec };
