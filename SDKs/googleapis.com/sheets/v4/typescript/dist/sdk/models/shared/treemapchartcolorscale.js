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
// TreemapChartColorScale
/**
 * A color scale for a treemap chart.
**/
var TreemapChartColorScale = /** @class */ (function (_super) {
    __extends(TreemapChartColorScale, _super);
    function TreemapChartColorScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValueColor" }),
        __metadata("design:type", Color)
    ], TreemapChartColorScale.prototype, "maxValueColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValueColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], TreemapChartColorScale.prototype, "maxValueColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=midValueColor" }),
        __metadata("design:type", Color)
    ], TreemapChartColorScale.prototype, "midValueColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=midValueColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], TreemapChartColorScale.prototype, "midValueColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValueColor" }),
        __metadata("design:type", Color)
    ], TreemapChartColorScale.prototype, "minValueColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValueColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], TreemapChartColorScale.prototype, "minValueColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noDataColor" }),
        __metadata("design:type", Color)
    ], TreemapChartColorScale.prototype, "noDataColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noDataColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], TreemapChartColorScale.prototype, "noDataColorStyle", void 0);
    return TreemapChartColorScale;
}(SpeakeasyBase));
export { TreemapChartColorScale };
