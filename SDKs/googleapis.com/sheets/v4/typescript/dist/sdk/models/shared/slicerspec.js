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
import { GridRange } from "./gridrange";
import { FilterCriteria } from "./filtercriteria";
import { TextFormat } from "./textformat";
export var SlicerSpecHorizontalAlignmentEnum;
(function (SlicerSpecHorizontalAlignmentEnum) {
    SlicerSpecHorizontalAlignmentEnum["HorizontalAlignUnspecified"] = "HORIZONTAL_ALIGN_UNSPECIFIED";
    SlicerSpecHorizontalAlignmentEnum["Left"] = "LEFT";
    SlicerSpecHorizontalAlignmentEnum["Center"] = "CENTER";
    SlicerSpecHorizontalAlignmentEnum["Right"] = "RIGHT";
})(SlicerSpecHorizontalAlignmentEnum || (SlicerSpecHorizontalAlignmentEnum = {}));
// SlicerSpec
/**
 * The specifications of a slicer.
**/
var SlicerSpec = /** @class */ (function (_super) {
    __extends(SlicerSpec, _super);
    function SlicerSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyToPivotTables" }),
        __metadata("design:type", Boolean)
    ], SlicerSpec.prototype, "applyToPivotTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", Color)
    ], SlicerSpec.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], SlicerSpec.prototype, "backgroundColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnIndex" }),
        __metadata("design:type", Number)
    ], SlicerSpec.prototype, "columnIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRange" }),
        __metadata("design:type", GridRange)
    ], SlicerSpec.prototype, "dataRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterCriteria" }),
        __metadata("design:type", FilterCriteria)
    ], SlicerSpec.prototype, "filterCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalAlignment" }),
        __metadata("design:type", String)
    ], SlicerSpec.prototype, "horizontalAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textFormat" }),
        __metadata("design:type", TextFormat)
    ], SlicerSpec.prototype, "textFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SlicerSpec.prototype, "title", void 0);
    return SlicerSpec;
}(SpeakeasyBase));
export { SlicerSpec };
