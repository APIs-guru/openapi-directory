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
import { Dimension } from "./dimension";
export var ParagraphStyleAlignmentEnum;
(function (ParagraphStyleAlignmentEnum) {
    ParagraphStyleAlignmentEnum["AlignmentUnspecified"] = "ALIGNMENT_UNSPECIFIED";
    ParagraphStyleAlignmentEnum["Start"] = "START";
    ParagraphStyleAlignmentEnum["Center"] = "CENTER";
    ParagraphStyleAlignmentEnum["End"] = "END";
    ParagraphStyleAlignmentEnum["Justified"] = "JUSTIFIED";
})(ParagraphStyleAlignmentEnum || (ParagraphStyleAlignmentEnum = {}));
export var ParagraphStyleDirectionEnum;
(function (ParagraphStyleDirectionEnum) {
    ParagraphStyleDirectionEnum["TextDirectionUnspecified"] = "TEXT_DIRECTION_UNSPECIFIED";
    ParagraphStyleDirectionEnum["LeftToRight"] = "LEFT_TO_RIGHT";
    ParagraphStyleDirectionEnum["RightToLeft"] = "RIGHT_TO_LEFT";
})(ParagraphStyleDirectionEnum || (ParagraphStyleDirectionEnum = {}));
export var ParagraphStyleSpacingModeEnum;
(function (ParagraphStyleSpacingModeEnum) {
    ParagraphStyleSpacingModeEnum["SpacingModeUnspecified"] = "SPACING_MODE_UNSPECIFIED";
    ParagraphStyleSpacingModeEnum["NeverCollapse"] = "NEVER_COLLAPSE";
    ParagraphStyleSpacingModeEnum["CollapseLists"] = "COLLAPSE_LISTS";
})(ParagraphStyleSpacingModeEnum || (ParagraphStyleSpacingModeEnum = {}));
// ParagraphStyle
/**
 * Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
**/
var ParagraphStyle = /** @class */ (function (_super) {
    __extends(ParagraphStyle, _super);
    function ParagraphStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignment" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "alignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentEnd" }),
        __metadata("design:type", Dimension)
    ], ParagraphStyle.prototype, "indentEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentFirstLine" }),
        __metadata("design:type", Dimension)
    ], ParagraphStyle.prototype, "indentFirstLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentStart" }),
        __metadata("design:type", Dimension)
    ], ParagraphStyle.prototype, "indentStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineSpacing" }),
        __metadata("design:type", Number)
    ], ParagraphStyle.prototype, "lineSpacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceAbove" }),
        __metadata("design:type", Dimension)
    ], ParagraphStyle.prototype, "spaceAbove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceBelow" }),
        __metadata("design:type", Dimension)
    ], ParagraphStyle.prototype, "spaceBelow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spacingMode" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "spacingMode", void 0);
    return ParagraphStyle;
}(SpeakeasyBase));
export { ParagraphStyle };
