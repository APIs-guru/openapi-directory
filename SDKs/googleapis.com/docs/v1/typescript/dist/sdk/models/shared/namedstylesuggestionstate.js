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
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
export var NamedStyleSuggestionStateNamedStyleTypeEnum;
(function (NamedStyleSuggestionStateNamedStyleTypeEnum) {
    NamedStyleSuggestionStateNamedStyleTypeEnum["NamedStyleTypeUnspecified"] = "NAMED_STYLE_TYPE_UNSPECIFIED";
    NamedStyleSuggestionStateNamedStyleTypeEnum["NormalText"] = "NORMAL_TEXT";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Title"] = "TITLE";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Subtitle"] = "SUBTITLE";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading1"] = "HEADING_1";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading2"] = "HEADING_2";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading3"] = "HEADING_3";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading4"] = "HEADING_4";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading5"] = "HEADING_5";
    NamedStyleSuggestionStateNamedStyleTypeEnum["Heading6"] = "HEADING_6";
})(NamedStyleSuggestionStateNamedStyleTypeEnum || (NamedStyleSuggestionStateNamedStyleTypeEnum = {}));
// NamedStyleSuggestionState
/**
 * A suggestion state of a NamedStyle message.
**/
var NamedStyleSuggestionState = /** @class */ (function (_super) {
    __extends(NamedStyleSuggestionState, _super);
    function NamedStyleSuggestionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedStyleType" }),
        __metadata("design:type", String)
    ], NamedStyleSuggestionState.prototype, "namedStyleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphStyleSuggestionState" }),
        __metadata("design:type", ParagraphStyleSuggestionState)
    ], NamedStyleSuggestionState.prototype, "paragraphStyleSuggestionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyleSuggestionState" }),
        __metadata("design:type", TextStyleSuggestionState)
    ], NamedStyleSuggestionState.prototype, "textStyleSuggestionState", void 0);
    return NamedStyleSuggestionState;
}(SpeakeasyBase));
export { NamedStyleSuggestionState };
