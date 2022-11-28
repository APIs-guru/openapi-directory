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
import { BasicChartAxis } from "./basicchartaxis";
import { BasicChartDomain } from "./basicchartdomain";
import { BasicChartSeries } from "./basicchartseries";
import { DataLabel } from "./datalabel";
export var BasicChartSpecChartTypeEnum;
(function (BasicChartSpecChartTypeEnum) {
    BasicChartSpecChartTypeEnum["BasicChartTypeUnspecified"] = "BASIC_CHART_TYPE_UNSPECIFIED";
    BasicChartSpecChartTypeEnum["Bar"] = "BAR";
    BasicChartSpecChartTypeEnum["Line"] = "LINE";
    BasicChartSpecChartTypeEnum["Area"] = "AREA";
    BasicChartSpecChartTypeEnum["Column"] = "COLUMN";
    BasicChartSpecChartTypeEnum["Scatter"] = "SCATTER";
    BasicChartSpecChartTypeEnum["Combo"] = "COMBO";
    BasicChartSpecChartTypeEnum["SteppedArea"] = "STEPPED_AREA";
})(BasicChartSpecChartTypeEnum || (BasicChartSpecChartTypeEnum = {}));
export var BasicChartSpecCompareModeEnum;
(function (BasicChartSpecCompareModeEnum) {
    BasicChartSpecCompareModeEnum["BasicChartCompareModeUnspecified"] = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED";
    BasicChartSpecCompareModeEnum["Datum"] = "DATUM";
    BasicChartSpecCompareModeEnum["Category"] = "CATEGORY";
})(BasicChartSpecCompareModeEnum || (BasicChartSpecCompareModeEnum = {}));
export var BasicChartSpecLegendPositionEnum;
(function (BasicChartSpecLegendPositionEnum) {
    BasicChartSpecLegendPositionEnum["BasicChartLegendPositionUnspecified"] = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED";
    BasicChartSpecLegendPositionEnum["BottomLegend"] = "BOTTOM_LEGEND";
    BasicChartSpecLegendPositionEnum["LeftLegend"] = "LEFT_LEGEND";
    BasicChartSpecLegendPositionEnum["RightLegend"] = "RIGHT_LEGEND";
    BasicChartSpecLegendPositionEnum["TopLegend"] = "TOP_LEGEND";
    BasicChartSpecLegendPositionEnum["NoLegend"] = "NO_LEGEND";
})(BasicChartSpecLegendPositionEnum || (BasicChartSpecLegendPositionEnum = {}));
export var BasicChartSpecStackedTypeEnum;
(function (BasicChartSpecStackedTypeEnum) {
    BasicChartSpecStackedTypeEnum["BasicChartStackedTypeUnspecified"] = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED";
    BasicChartSpecStackedTypeEnum["NotStacked"] = "NOT_STACKED";
    BasicChartSpecStackedTypeEnum["Stacked"] = "STACKED";
    BasicChartSpecStackedTypeEnum["PercentStacked"] = "PERCENT_STACKED";
})(BasicChartSpecStackedTypeEnum || (BasicChartSpecStackedTypeEnum = {}));
// BasicChartSpec
/**
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
**/
var BasicChartSpec = /** @class */ (function (_super) {
    __extends(BasicChartSpec, _super);
    function BasicChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=axis", elemType: BasicChartAxis }),
        __metadata("design:type", Array)
    ], BasicChartSpec.prototype, "axis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chartType" }),
        __metadata("design:type", String)
    ], BasicChartSpec.prototype, "chartType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compareMode" }),
        __metadata("design:type", String)
    ], BasicChartSpec.prototype, "compareMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains", elemType: BasicChartDomain }),
        __metadata("design:type", Array)
    ], BasicChartSpec.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerCount" }),
        __metadata("design:type", Number)
    ], BasicChartSpec.prototype, "headerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interpolateNulls" }),
        __metadata("design:type", Boolean)
    ], BasicChartSpec.prototype, "interpolateNulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legendPosition" }),
        __metadata("design:type", String)
    ], BasicChartSpec.prototype, "legendPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineSmoothing" }),
        __metadata("design:type", Boolean)
    ], BasicChartSpec.prototype, "lineSmoothing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series", elemType: BasicChartSeries }),
        __metadata("design:type", Array)
    ], BasicChartSpec.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackedType" }),
        __metadata("design:type", String)
    ], BasicChartSpec.prototype, "stackedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threeDimensional" }),
        __metadata("design:type", Boolean)
    ], BasicChartSpec.prototype, "threeDimensional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalDataLabel" }),
        __metadata("design:type", DataLabel)
    ], BasicChartSpec.prototype, "totalDataLabel", void 0);
    return BasicChartSpec;
}(SpeakeasyBase));
export { BasicChartSpec };
