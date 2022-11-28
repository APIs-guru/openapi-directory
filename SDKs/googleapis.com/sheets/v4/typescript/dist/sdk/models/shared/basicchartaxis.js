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
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { ChartAxisViewWindowOptions } from "./chartaxisviewwindowoptions";
export var BasicChartAxisPositionEnum;
(function (BasicChartAxisPositionEnum) {
    BasicChartAxisPositionEnum["BasicChartAxisPositionUnspecified"] = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED";
    BasicChartAxisPositionEnum["BottomAxis"] = "BOTTOM_AXIS";
    BasicChartAxisPositionEnum["LeftAxis"] = "LEFT_AXIS";
    BasicChartAxisPositionEnum["RightAxis"] = "RIGHT_AXIS";
})(BasicChartAxisPositionEnum || (BasicChartAxisPositionEnum = {}));
// BasicChartAxis
/**
 * An axis of the chart. A chart may not have more than one axis per axis position.
**/
var BasicChartAxis = /** @class */ (function (_super) {
    __extends(BasicChartAxis, _super);
    function BasicChartAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", TextFormat)
    ], BasicChartAxis.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], BasicChartAxis.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], BasicChartAxis.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titleTextPosition" }),
        __metadata("design:type", TextPosition)
    ], BasicChartAxis.prototype, "titleTextPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewWindowOptions" }),
        __metadata("design:type", ChartAxisViewWindowOptions)
    ], BasicChartAxis.prototype, "viewWindowOptions", void 0);
    return BasicChartAxis;
}(SpeakeasyBase));
export { BasicChartAxis };
