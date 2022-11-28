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
import { ChartData } from "./chartdata";
export var PieChartSpecLegendPositionEnum;
(function (PieChartSpecLegendPositionEnum) {
    PieChartSpecLegendPositionEnum["PieChartLegendPositionUnspecified"] = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED";
    PieChartSpecLegendPositionEnum["BottomLegend"] = "BOTTOM_LEGEND";
    PieChartSpecLegendPositionEnum["LeftLegend"] = "LEFT_LEGEND";
    PieChartSpecLegendPositionEnum["RightLegend"] = "RIGHT_LEGEND";
    PieChartSpecLegendPositionEnum["TopLegend"] = "TOP_LEGEND";
    PieChartSpecLegendPositionEnum["NoLegend"] = "NO_LEGEND";
    PieChartSpecLegendPositionEnum["LabeledLegend"] = "LABELED_LEGEND";
})(PieChartSpecLegendPositionEnum || (PieChartSpecLegendPositionEnum = {}));
// PieChartSpec
/**
 * A pie chart.
**/
var PieChartSpec = /** @class */ (function (_super) {
    __extends(PieChartSpec, _super);
    function PieChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", ChartData)
    ], PieChartSpec.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legendPosition" }),
        __metadata("design:type", String)
    ], PieChartSpec.prototype, "legendPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pieHole" }),
        __metadata("design:type", Number)
    ], PieChartSpec.prototype, "pieHole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series" }),
        __metadata("design:type", ChartData)
    ], PieChartSpec.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threeDimensional" }),
        __metadata("design:type", Boolean)
    ], PieChartSpec.prototype, "threeDimensional", void 0);
    return PieChartSpec;
}(SpeakeasyBase));
export { PieChartSpec };
