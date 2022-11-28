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
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { PolicyCompliance } from "./policycompliance";
import { AdvertiserAndBrand } from "./advertiserandbrand";
export var CreativeServingDecisionDetectedAttributesEnum;
(function (CreativeServingDecisionDetectedAttributesEnum) {
    CreativeServingDecisionDetectedAttributesEnum["AttributeUnspecified"] = "ATTRIBUTE_UNSPECIFIED";
    CreativeServingDecisionDetectedAttributesEnum["ImageRichMedia"] = "IMAGE_RICH_MEDIA";
    CreativeServingDecisionDetectedAttributesEnum["AdobeFlashFlv"] = "ADOBE_FLASH_FLV";
    CreativeServingDecisionDetectedAttributesEnum["IsTagged"] = "IS_TAGGED";
    CreativeServingDecisionDetectedAttributesEnum["IsCookieTargeted"] = "IS_COOKIE_TARGETED";
    CreativeServingDecisionDetectedAttributesEnum["IsUserInterestTargeted"] = "IS_USER_INTEREST_TARGETED";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionNone"] = "EXPANDING_DIRECTION_NONE";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionUp"] = "EXPANDING_DIRECTION_UP";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionDown"] = "EXPANDING_DIRECTION_DOWN";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionLeft"] = "EXPANDING_DIRECTION_LEFT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionRight"] = "EXPANDING_DIRECTION_RIGHT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionUpLeft"] = "EXPANDING_DIRECTION_UP_LEFT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionUpRight"] = "EXPANDING_DIRECTION_UP_RIGHT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionDownLeft"] = "EXPANDING_DIRECTION_DOWN_LEFT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionDownRight"] = "EXPANDING_DIRECTION_DOWN_RIGHT";
    CreativeServingDecisionDetectedAttributesEnum["CreativeTypeHtml"] = "CREATIVE_TYPE_HTML";
    CreativeServingDecisionDetectedAttributesEnum["CreativeTypeVastVideo"] = "CREATIVE_TYPE_VAST_VIDEO";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionUpOrDown"] = "EXPANDING_DIRECTION_UP_OR_DOWN";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionLeftOrRight"] = "EXPANDING_DIRECTION_LEFT_OR_RIGHT";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingDirectionAnyDiagonal"] = "EXPANDING_DIRECTION_ANY_DIAGONAL";
    CreativeServingDecisionDetectedAttributesEnum["ExpandingActionRolloverToExpand"] = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND";
    CreativeServingDecisionDetectedAttributesEnum["InstreamVastVideoTypeVpaidFlash"] = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeMraid"] = "RICH_MEDIA_CAPABILITY_TYPE_MRAID";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeFlash"] = "RICH_MEDIA_CAPABILITY_TYPE_FLASH";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeHtml5"] = "RICH_MEDIA_CAPABILITY_TYPE_HTML5";
    CreativeServingDecisionDetectedAttributesEnum["SkippableInstreamVideo"] = "SKIPPABLE_INSTREAM_VIDEO";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_SSL";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeNonSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL";
    CreativeServingDecisionDetectedAttributesEnum["RichMediaCapabilityTypeInterstitial"] = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL";
    CreativeServingDecisionDetectedAttributesEnum["NonSkippableInstreamVideo"] = "NON_SKIPPABLE_INSTREAM_VIDEO";
    CreativeServingDecisionDetectedAttributesEnum["NativeEligibilityEligible"] = "NATIVE_ELIGIBILITY_ELIGIBLE";
    CreativeServingDecisionDetectedAttributesEnum["NonVpaid"] = "NON_VPAID";
    CreativeServingDecisionDetectedAttributesEnum["NativeEligibilityNotEligible"] = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE";
    CreativeServingDecisionDetectedAttributesEnum["AnyInterstitial"] = "ANY_INTERSTITIAL";
    CreativeServingDecisionDetectedAttributesEnum["NonInterstitial"] = "NON_INTERSTITIAL";
    CreativeServingDecisionDetectedAttributesEnum["InBannerVideo"] = "IN_BANNER_VIDEO";
    CreativeServingDecisionDetectedAttributesEnum["RenderingSizelessAdx"] = "RENDERING_SIZELESS_ADX";
    CreativeServingDecisionDetectedAttributesEnum["Omsdk10"] = "OMSDK_1_0";
})(CreativeServingDecisionDetectedAttributesEnum || (CreativeServingDecisionDetectedAttributesEnum = {}));
// CreativeServingDecision
/**
 * Top level status and detected attributes of a creative.
**/
var CreativeServingDecision = /** @class */ (function (_super) {
    __extends(CreativeServingDecision, _super);
    function CreativeServingDecision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adTechnologyProviders" }),
        __metadata("design:type", AdTechnologyProviders)
    ], CreativeServingDecision.prototype, "adTechnologyProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chinaPolicyCompliance" }),
        __metadata("design:type", PolicyCompliance)
    ], CreativeServingDecision.prototype, "chinaPolicyCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealsPolicyCompliance" }),
        __metadata("design:type", PolicyCompliance)
    ], CreativeServingDecision.prototype, "dealsPolicyCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedAdvertisers", elemType: AdvertiserAndBrand }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedAdvertisers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedAttributes" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedClickThroughUrls" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedClickThroughUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedDomains" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedLanguages" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedProductCategories" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedProductCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedSensitiveCategories" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedSensitiveCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedVendorIds" }),
        __metadata("design:type", Array)
    ], CreativeServingDecision.prototype, "detectedVendorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStatusUpdate" }),
        __metadata("design:type", String)
    ], CreativeServingDecision.prototype, "lastStatusUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkPolicyCompliance" }),
        __metadata("design:type", PolicyCompliance)
    ], CreativeServingDecision.prototype, "networkPolicyCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformPolicyCompliance" }),
        __metadata("design:type", PolicyCompliance)
    ], CreativeServingDecision.prototype, "platformPolicyCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=russiaPolicyCompliance" }),
        __metadata("design:type", PolicyCompliance)
    ], CreativeServingDecision.prototype, "russiaPolicyCompliance", void 0);
    return CreativeServingDecision;
}(SpeakeasyBase));
export { CreativeServingDecision };
