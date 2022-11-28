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
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";
export var BaselineValueFormatComparisonTypeEnum;
(function (BaselineValueFormatComparisonTypeEnum) {
    BaselineValueFormatComparisonTypeEnum["ComparisonTypeUndefined"] = "COMPARISON_TYPE_UNDEFINED";
    BaselineValueFormatComparisonTypeEnum["AbsoluteDifference"] = "ABSOLUTE_DIFFERENCE";
    BaselineValueFormatComparisonTypeEnum["PercentageDifference"] = "PERCENTAGE_DIFFERENCE";
})(BaselineValueFormatComparisonTypeEnum || (BaselineValueFormatComparisonTypeEnum = {}));
// BaselineValueFormat
/**
 * Formatting options for baseline value.
**/
var BaselineValueFormat = /** @class */ (function (_super) {
    __extends(BaselineValueFormat, _super);
    function BaselineValueFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonType" }),
        __metadata("design:type", String)
    ], BaselineValueFormat.prototype, "comparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BaselineValueFormat.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativeColor" }),
        __metadata("design:type", Color)
    ], BaselineValueFormat.prototype, "negativeColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativeColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BaselineValueFormat.prototype, "negativeColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", TextPosition)
    ], BaselineValueFormat.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positiveColor" }),
        __metadata("design:type", Color)
    ], BaselineValueFormat.prototype, "positiveColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positiveColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BaselineValueFormat.prototype, "positiveColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textFormat" }),
        __metadata("design:type", TextFormat)
    ], BaselineValueFormat.prototype, "textFormat", void 0);
    return BaselineValueFormat;
}(SpeakeasyBase));
export { BaselineValueFormat };
