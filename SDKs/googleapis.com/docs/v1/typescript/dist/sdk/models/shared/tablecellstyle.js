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
import { OptionalColor } from "./optionalcolor";
import { TableCellBorder } from "./tablecellborder";
import { Dimension } from "./dimension";
export var TableCellStyleContentAlignmentEnum;
(function (TableCellStyleContentAlignmentEnum) {
    TableCellStyleContentAlignmentEnum["ContentAlignmentUnspecified"] = "CONTENT_ALIGNMENT_UNSPECIFIED";
    TableCellStyleContentAlignmentEnum["ContentAlignmentUnsupported"] = "CONTENT_ALIGNMENT_UNSUPPORTED";
    TableCellStyleContentAlignmentEnum["Top"] = "TOP";
    TableCellStyleContentAlignmentEnum["Middle"] = "MIDDLE";
    TableCellStyleContentAlignmentEnum["Bottom"] = "BOTTOM";
})(TableCellStyleContentAlignmentEnum || (TableCellStyleContentAlignmentEnum = {}));
// TableCellStyle
/**
 * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
**/
var TableCellStyle = /** @class */ (function (_super) {
    __extends(TableCellStyle, _super);
    function TableCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", OptionalColor)
    ], TableCellStyle.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderBottom" }),
        __metadata("design:type", TableCellBorder)
    ], TableCellStyle.prototype, "borderBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderLeft" }),
        __metadata("design:type", TableCellBorder)
    ], TableCellStyle.prototype, "borderLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderRight" }),
        __metadata("design:type", TableCellBorder)
    ], TableCellStyle.prototype, "borderRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderTop" }),
        __metadata("design:type", TableCellBorder)
    ], TableCellStyle.prototype, "borderTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnSpan" }),
        __metadata("design:type", Number)
    ], TableCellStyle.prototype, "columnSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentAlignment" }),
        __metadata("design:type", String)
    ], TableCellStyle.prototype, "contentAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paddingBottom" }),
        __metadata("design:type", Dimension)
    ], TableCellStyle.prototype, "paddingBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paddingLeft" }),
        __metadata("design:type", Dimension)
    ], TableCellStyle.prototype, "paddingLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paddingRight" }),
        __metadata("design:type", Dimension)
    ], TableCellStyle.prototype, "paddingRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paddingTop" }),
        __metadata("design:type", Dimension)
    ], TableCellStyle.prototype, "paddingTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowSpan" }),
        __metadata("design:type", Number)
    ], TableCellStyle.prototype, "rowSpan", void 0);
    return TableCellStyle;
}(SpeakeasyBase));
export { TableCellStyle };
