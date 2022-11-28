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
import { Dimension } from "./dimension";
import { Link } from "./link";
import { WeightedFontFamily } from "./weightedfontfamily";
export var TextStyleBaselineOffsetEnum;
(function (TextStyleBaselineOffsetEnum) {
    TextStyleBaselineOffsetEnum["BaselineOffsetUnspecified"] = "BASELINE_OFFSET_UNSPECIFIED";
    TextStyleBaselineOffsetEnum["None"] = "NONE";
    TextStyleBaselineOffsetEnum["Superscript"] = "SUPERSCRIPT";
    TextStyleBaselineOffsetEnum["Subscript"] = "SUBSCRIPT";
})(TextStyleBaselineOffsetEnum || (TextStyleBaselineOffsetEnum = {}));
// TextStyle
/**
 * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
**/
var TextStyle = /** @class */ (function (_super) {
    __extends(TextStyle, _super);
    function TextStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", OptionalColor)
    ], TextStyle.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baselineOffset" }),
        __metadata("design:type", String)
    ], TextStyle.prototype, "baselineOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], TextStyle.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontFamily" }),
        __metadata("design:type", String)
    ], TextStyle.prototype, "fontFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontSize" }),
        __metadata("design:type", Dimension)
    ], TextStyle.prototype, "fontSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foregroundColor" }),
        __metadata("design:type", OptionalColor)
    ], TextStyle.prototype, "foregroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], TextStyle.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Link)
    ], TextStyle.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallCaps" }),
        __metadata("design:type", Boolean)
    ], TextStyle.prototype, "smallCaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], TextStyle.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], TextStyle.prototype, "underline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightedFontFamily" }),
        __metadata("design:type", WeightedFontFamily)
    ], TextStyle.prototype, "weightedFontFamily", void 0);
    return TextStyle;
}(SpeakeasyBase));
export { TextStyle };
