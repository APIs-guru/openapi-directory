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
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
export var BubbleChartSpecLegendPositionEnum;
(function (BubbleChartSpecLegendPositionEnum) {
    BubbleChartSpecLegendPositionEnum["BubbleChartLegendPositionUnspecified"] = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED";
    BubbleChartSpecLegendPositionEnum["BottomLegend"] = "BOTTOM_LEGEND";
    BubbleChartSpecLegendPositionEnum["LeftLegend"] = "LEFT_LEGEND";
    BubbleChartSpecLegendPositionEnum["RightLegend"] = "RIGHT_LEGEND";
    BubbleChartSpecLegendPositionEnum["TopLegend"] = "TOP_LEGEND";
    BubbleChartSpecLegendPositionEnum["NoLegend"] = "NO_LEGEND";
    BubbleChartSpecLegendPositionEnum["InsideLegend"] = "INSIDE_LEGEND";
})(BubbleChartSpecLegendPositionEnum || (BubbleChartSpecLegendPositionEnum = {}));
// BubbleChartSpec
/**
 * A bubble chart.
**/
var BubbleChartSpec = /** @class */ (function (_super) {
    __extends(BubbleChartSpec, _super);
    function BubbleChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleBorderColor" }),
        __metadata("design:type", Color)
    ], BubbleChartSpec.prototype, "bubbleBorderColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleBorderColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BubbleChartSpec.prototype, "bubbleBorderColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleLabels" }),
        __metadata("design:type", ChartData)
    ], BubbleChartSpec.prototype, "bubbleLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleMaxRadiusSize" }),
        __metadata("design:type", Number)
    ], BubbleChartSpec.prototype, "bubbleMaxRadiusSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleMinRadiusSize" }),
        __metadata("design:type", Number)
    ], BubbleChartSpec.prototype, "bubbleMinRadiusSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleOpacity" }),
        __metadata("design:type", Number)
    ], BubbleChartSpec.prototype, "bubbleOpacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleSizes" }),
        __metadata("design:type", ChartData)
    ], BubbleChartSpec.prototype, "bubbleSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bubbleTextStyle" }),
        __metadata("design:type", TextFormat)
    ], BubbleChartSpec.prototype, "bubbleTextStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", ChartData)
    ], BubbleChartSpec.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupIds" }),
        __metadata("design:type", ChartData)
    ], BubbleChartSpec.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legendPosition" }),
        __metadata("design:type", String)
    ], BubbleChartSpec.prototype, "legendPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series" }),
        __metadata("design:type", ChartData)
    ], BubbleChartSpec.prototype, "series", void 0);
    return BubbleChartSpec;
}(SpeakeasyBase));
export { BubbleChartSpec };
