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
import { ShadingSuggestionState } from "./shadingsuggestionstate";
// ParagraphStyleSuggestionState
/**
 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
var ParagraphStyleSuggestionState = /** @class */ (function (_super) {
    __extends(ParagraphStyleSuggestionState, _super);
    function ParagraphStyleSuggestionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignmentSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "alignmentSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidWidowAndOrphanSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "avoidWidowAndOrphanSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderBetweenSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "borderBetweenSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderBottomSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "borderBottomSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderLeftSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "borderLeftSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderRightSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "borderRightSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderTopSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "borderTopSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directionSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "directionSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headingIdSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "headingIdSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentEndSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "indentEndSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentFirstLineSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "indentFirstLineSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentStartSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "indentStartSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keepLinesTogetherSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "keepLinesTogetherSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keepWithNextSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "keepWithNextSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineSpacingSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "lineSpacingSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedStyleTypeSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "namedStyleTypeSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreakBeforeSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "pageBreakBeforeSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shadingSuggestionState" }),
        __metadata("design:type", ShadingSuggestionState)
    ], ParagraphStyleSuggestionState.prototype, "shadingSuggestionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceAboveSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "spaceAboveSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceBelowSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "spaceBelowSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spacingModeSuggested" }),
        __metadata("design:type", Boolean)
    ], ParagraphStyleSuggestionState.prototype, "spacingModeSuggested", void 0);
    return ParagraphStyleSuggestionState;
}(SpeakeasyBase));
export { ParagraphStyleSuggestionState };
