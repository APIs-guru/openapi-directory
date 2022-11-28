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
export var DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum;
(function (DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum) {
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierUnspecified"] = "CONTENT_RATING_TIER_UNSPECIFIED";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierUnrated"] = "CONTENT_RATING_TIER_UNRATED";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierGeneral"] = "CONTENT_RATING_TIER_GENERAL";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierParentalGuidance"] = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierTeens"] = "CONTENT_RATING_TIER_TEENS";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierMature"] = "CONTENT_RATING_TIER_MATURE";
    DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum["ContentRatingTierFamilies"] = "CONTENT_RATING_TIER_FAMILIES";
})(DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum || (DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum = {}));
// DigitalContentLabelTargetingOptionDetails
/**
 * Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
var DigitalContentLabelTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(DigitalContentLabelTargetingOptionDetails, _super);
    function DigitalContentLabelTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRatingTier" }),
        __metadata("design:type", String)
    ], DigitalContentLabelTargetingOptionDetails.prototype, "contentRatingTier", void 0);
    return DigitalContentLabelTargetingOptionDetails;
}(SpeakeasyBase));
export { DigitalContentLabelTargetingOptionDetails };
