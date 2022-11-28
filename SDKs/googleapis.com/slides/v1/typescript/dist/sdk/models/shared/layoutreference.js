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
export var LayoutReferencePredefinedLayoutEnum;
(function (LayoutReferencePredefinedLayoutEnum) {
    LayoutReferencePredefinedLayoutEnum["PredefinedLayoutUnspecified"] = "PREDEFINED_LAYOUT_UNSPECIFIED";
    LayoutReferencePredefinedLayoutEnum["Blank"] = "BLANK";
    LayoutReferencePredefinedLayoutEnum["CaptionOnly"] = "CAPTION_ONLY";
    LayoutReferencePredefinedLayoutEnum["Title"] = "TITLE";
    LayoutReferencePredefinedLayoutEnum["TitleAndBody"] = "TITLE_AND_BODY";
    LayoutReferencePredefinedLayoutEnum["TitleAndTwoColumns"] = "TITLE_AND_TWO_COLUMNS";
    LayoutReferencePredefinedLayoutEnum["TitleOnly"] = "TITLE_ONLY";
    LayoutReferencePredefinedLayoutEnum["SectionHeader"] = "SECTION_HEADER";
    LayoutReferencePredefinedLayoutEnum["SectionTitleAndDescription"] = "SECTION_TITLE_AND_DESCRIPTION";
    LayoutReferencePredefinedLayoutEnum["OneColumnText"] = "ONE_COLUMN_TEXT";
    LayoutReferencePredefinedLayoutEnum["MainPoint"] = "MAIN_POINT";
    LayoutReferencePredefinedLayoutEnum["BigNumber"] = "BIG_NUMBER";
})(LayoutReferencePredefinedLayoutEnum || (LayoutReferencePredefinedLayoutEnum = {}));
// LayoutReference
/**
 * Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
**/
var LayoutReference = /** @class */ (function (_super) {
    __extends(LayoutReference, _super);
    function LayoutReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutId" }),
        __metadata("design:type", String)
    ], LayoutReference.prototype, "layoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedLayout" }),
        __metadata("design:type", String)
    ], LayoutReference.prototype, "predefinedLayout", void 0);
    return LayoutReference;
}(SpeakeasyBase));
export { LayoutReference };
