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
import { ParagraphBorder } from "./paragraphborder";
import { Dimension } from "./dimension";
import { Shading } from "./shading";
import { TabStop } from "./tabstop";
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
    ParagraphStyleDirectionEnum["ContentDirectionUnspecified"] = "CONTENT_DIRECTION_UNSPECIFIED";
    ParagraphStyleDirectionEnum["LeftToRight"] = "LEFT_TO_RIGHT";
    ParagraphStyleDirectionEnum["RightToLeft"] = "RIGHT_TO_LEFT";
})(ParagraphStyleDirectionEnum || (ParagraphStyleDirectionEnum = {}));
export var ParagraphStyleNamedStyleTypeEnum;
(function (ParagraphStyleNamedStyleTypeEnum) {
    ParagraphStyleNamedStyleTypeEnum["NamedStyleTypeUnspecified"] = "NAMED_STYLE_TYPE_UNSPECIFIED";
    ParagraphStyleNamedStyleTypeEnum["NormalText"] = "NORMAL_TEXT";
    ParagraphStyleNamedStyleTypeEnum["Title"] = "TITLE";
    ParagraphStyleNamedStyleTypeEnum["Subtitle"] = "SUBTITLE";
    ParagraphStyleNamedStyleTypeEnum["Heading1"] = "HEADING_1";
    ParagraphStyleNamedStyleTypeEnum["Heading2"] = "HEADING_2";
    ParagraphStyleNamedStyleTypeEnum["Heading3"] = "HEADING_3";
    ParagraphStyleNamedStyleTypeEnum["Heading4"] = "HEADING_4";
    ParagraphStyleNamedStyleTypeEnum["Heading5"] = "HEADING_5";
    ParagraphStyleNamedStyleTypeEnum["Heading6"] = "HEADING_6";
})(ParagraphStyleNamedStyleTypeEnum || (ParagraphStyleNamedStyleTypeEnum = {}));
export var ParagraphStyleSpacingModeEnum;
(function (ParagraphStyleSpacingModeEnum) {
    ParagraphStyleSpacingModeEnum["SpacingModeUnspecified"] = "SPACING_MODE_UNSPECIFIED";
    ParagraphStyleSpacingModeEnum["NeverCollapse"] = "NEVER_COLLAPSE";
    ParagraphStyleSpacingModeEnum["CollapseLists"] = "COLLAPSE_LISTS";
})(ParagraphStyleSpacingModeEnum || (ParagraphStyleSpacingModeEnum = {}));
// ParagraphStyle
/**
 * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
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
        SpeakeasyMetadata({ data: "json, name=avoidWidowAndOrphan" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyle.prototype, "avoidWidowAndOrphan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderBetween" }),
        __metadata("design:type", ParagraphBorder)
    ], ParagraphStyle.prototype, "borderBetween", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderBottom" }),
        __metadata("design:type", ParagraphBorder)
    ], ParagraphStyle.prototype, "borderBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderLeft" }),
        __metadata("design:type", ParagraphBorder)
    ], ParagraphStyle.prototype, "borderLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderRight" }),
        __metadata("design:type", ParagraphBorder)
    ], ParagraphStyle.prototype, "borderRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderTop" }),
        __metadata("design:type", ParagraphBorder)
    ], ParagraphStyle.prototype, "borderTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headingId" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "headingId", void 0);
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
        SpeakeasyMetadata({ data: "json, name=keepLinesTogether" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyle.prototype, "keepLinesTogether", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keepWithNext" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyle.prototype, "keepWithNext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineSpacing" }),
        __metadata("design:type", Number)
    ], ParagraphStyle.prototype, "lineSpacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedStyleType" }),
        __metadata("design:type", String)
    ], ParagraphStyle.prototype, "namedStyleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreakBefore" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyle.prototype, "pageBreakBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shading" }),
        __metadata("design:type", Shading)
    ], ParagraphStyle.prototype, "shading", void 0);
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
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tabStops", elemType: TabStop }),
        __metadata("design:type", Array)
    ], ParagraphStyle.prototype, "tabStops", void 0);
    return ParagraphStyle;
}(SpeakeasyBase));
export { ParagraphStyle };
