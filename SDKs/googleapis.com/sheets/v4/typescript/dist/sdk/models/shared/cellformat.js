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
import { Borders } from "./borders";
import { NumberFormat } from "./numberformat";
import { Padding } from "./padding";
import { TextFormat } from "./textformat";
import { TextRotation } from "./textrotation";
export var CellFormatHorizontalAlignmentEnum;
(function (CellFormatHorizontalAlignmentEnum) {
    CellFormatHorizontalAlignmentEnum["HorizontalAlignUnspecified"] = "HORIZONTAL_ALIGN_UNSPECIFIED";
    CellFormatHorizontalAlignmentEnum["Left"] = "LEFT";
    CellFormatHorizontalAlignmentEnum["Center"] = "CENTER";
    CellFormatHorizontalAlignmentEnum["Right"] = "RIGHT";
})(CellFormatHorizontalAlignmentEnum || (CellFormatHorizontalAlignmentEnum = {}));
export var CellFormatHyperlinkDisplayTypeEnum;
(function (CellFormatHyperlinkDisplayTypeEnum) {
    CellFormatHyperlinkDisplayTypeEnum["HyperlinkDisplayTypeUnspecified"] = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED";
    CellFormatHyperlinkDisplayTypeEnum["Linked"] = "LINKED";
    CellFormatHyperlinkDisplayTypeEnum["PlainText"] = "PLAIN_TEXT";
})(CellFormatHyperlinkDisplayTypeEnum || (CellFormatHyperlinkDisplayTypeEnum = {}));
export var CellFormatTextDirectionEnum;
(function (CellFormatTextDirectionEnum) {
    CellFormatTextDirectionEnum["TextDirectionUnspecified"] = "TEXT_DIRECTION_UNSPECIFIED";
    CellFormatTextDirectionEnum["LeftToRight"] = "LEFT_TO_RIGHT";
    CellFormatTextDirectionEnum["RightToLeft"] = "RIGHT_TO_LEFT";
})(CellFormatTextDirectionEnum || (CellFormatTextDirectionEnum = {}));
export var CellFormatVerticalAlignmentEnum;
(function (CellFormatVerticalAlignmentEnum) {
    CellFormatVerticalAlignmentEnum["VerticalAlignUnspecified"] = "VERTICAL_ALIGN_UNSPECIFIED";
    CellFormatVerticalAlignmentEnum["Top"] = "TOP";
    CellFormatVerticalAlignmentEnum["Middle"] = "MIDDLE";
    CellFormatVerticalAlignmentEnum["Bottom"] = "BOTTOM";
})(CellFormatVerticalAlignmentEnum || (CellFormatVerticalAlignmentEnum = {}));
export var CellFormatWrapStrategyEnum;
(function (CellFormatWrapStrategyEnum) {
    CellFormatWrapStrategyEnum["WrapStrategyUnspecified"] = "WRAP_STRATEGY_UNSPECIFIED";
    CellFormatWrapStrategyEnum["OverflowCell"] = "OVERFLOW_CELL";
    CellFormatWrapStrategyEnum["LegacyWrap"] = "LEGACY_WRAP";
    CellFormatWrapStrategyEnum["Clip"] = "CLIP";
    CellFormatWrapStrategyEnum["Wrap"] = "WRAP";
})(CellFormatWrapStrategyEnum || (CellFormatWrapStrategyEnum = {}));
// CellFormat
/**
 * The format of a cell.
**/
var CellFormat = /** @class */ (function (_super) {
    __extends(CellFormat, _super);
    function CellFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", Color)
    ], CellFormat.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], CellFormat.prototype, "backgroundColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borders" }),
        __metadata("design:type", Borders)
    ], CellFormat.prototype, "borders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalAlignment" }),
        __metadata("design:type", String)
    ], CellFormat.prototype, "horizontalAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperlinkDisplayType" }),
        __metadata("design:type", String)
    ], CellFormat.prototype, "hyperlinkDisplayType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberFormat" }),
        __metadata("design:type", NumberFormat)
    ], CellFormat.prototype, "numberFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padding" }),
        __metadata("design:type", Padding)
    ], CellFormat.prototype, "padding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textDirection" }),
        __metadata("design:type", String)
    ], CellFormat.prototype, "textDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textFormat" }),
        __metadata("design:type", TextFormat)
    ], CellFormat.prototype, "textFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textRotation" }),
        __metadata("design:type", TextRotation)
    ], CellFormat.prototype, "textRotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalAlignment" }),
        __metadata("design:type", String)
    ], CellFormat.prototype, "verticalAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrapStrategy" }),
        __metadata("design:type", String)
    ], CellFormat.prototype, "wrapStrategy", void 0);
    return CellFormat;
}(SpeakeasyBase));
export { CellFormat };
