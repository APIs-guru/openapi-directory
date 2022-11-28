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
import { CreativeServingDecision } from "./creativeservingdecision";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { VideoContent } from "./videocontent";
export var CreativeCreativeFormatEnum;
(function (CreativeCreativeFormatEnum) {
    CreativeCreativeFormatEnum["CreativeFormatUnspecified"] = "CREATIVE_FORMAT_UNSPECIFIED";
    CreativeCreativeFormatEnum["Html"] = "HTML";
    CreativeCreativeFormatEnum["Video"] = "VIDEO";
    CreativeCreativeFormatEnum["Native"] = "NATIVE";
})(CreativeCreativeFormatEnum || (CreativeCreativeFormatEnum = {}));
export var CreativeDeclaredAttributesEnum;
(function (CreativeDeclaredAttributesEnum) {
    CreativeDeclaredAttributesEnum["AttributeUnspecified"] = "ATTRIBUTE_UNSPECIFIED";
    CreativeDeclaredAttributesEnum["ImageRichMedia"] = "IMAGE_RICH_MEDIA";
    CreativeDeclaredAttributesEnum["AdobeFlashFlv"] = "ADOBE_FLASH_FLV";
    CreativeDeclaredAttributesEnum["IsTagged"] = "IS_TAGGED";
    CreativeDeclaredAttributesEnum["IsCookieTargeted"] = "IS_COOKIE_TARGETED";
    CreativeDeclaredAttributesEnum["IsUserInterestTargeted"] = "IS_USER_INTEREST_TARGETED";
    CreativeDeclaredAttributesEnum["ExpandingDirectionNone"] = "EXPANDING_DIRECTION_NONE";
    CreativeDeclaredAttributesEnum["ExpandingDirectionUp"] = "EXPANDING_DIRECTION_UP";
    CreativeDeclaredAttributesEnum["ExpandingDirectionDown"] = "EXPANDING_DIRECTION_DOWN";
    CreativeDeclaredAttributesEnum["ExpandingDirectionLeft"] = "EXPANDING_DIRECTION_LEFT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionRight"] = "EXPANDING_DIRECTION_RIGHT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionUpLeft"] = "EXPANDING_DIRECTION_UP_LEFT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionUpRight"] = "EXPANDING_DIRECTION_UP_RIGHT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionDownLeft"] = "EXPANDING_DIRECTION_DOWN_LEFT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionDownRight"] = "EXPANDING_DIRECTION_DOWN_RIGHT";
    CreativeDeclaredAttributesEnum["CreativeTypeHtml"] = "CREATIVE_TYPE_HTML";
    CreativeDeclaredAttributesEnum["CreativeTypeVastVideo"] = "CREATIVE_TYPE_VAST_VIDEO";
    CreativeDeclaredAttributesEnum["ExpandingDirectionUpOrDown"] = "EXPANDING_DIRECTION_UP_OR_DOWN";
    CreativeDeclaredAttributesEnum["ExpandingDirectionLeftOrRight"] = "EXPANDING_DIRECTION_LEFT_OR_RIGHT";
    CreativeDeclaredAttributesEnum["ExpandingDirectionAnyDiagonal"] = "EXPANDING_DIRECTION_ANY_DIAGONAL";
    CreativeDeclaredAttributesEnum["ExpandingActionRolloverToExpand"] = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND";
    CreativeDeclaredAttributesEnum["InstreamVastVideoTypeVpaidFlash"] = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeMraid"] = "RICH_MEDIA_CAPABILITY_TYPE_MRAID";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeFlash"] = "RICH_MEDIA_CAPABILITY_TYPE_FLASH";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeHtml5"] = "RICH_MEDIA_CAPABILITY_TYPE_HTML5";
    CreativeDeclaredAttributesEnum["SkippableInstreamVideo"] = "SKIPPABLE_INSTREAM_VIDEO";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_SSL";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeNonSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL";
    CreativeDeclaredAttributesEnum["RichMediaCapabilityTypeInterstitial"] = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL";
    CreativeDeclaredAttributesEnum["NonSkippableInstreamVideo"] = "NON_SKIPPABLE_INSTREAM_VIDEO";
    CreativeDeclaredAttributesEnum["NativeEligibilityEligible"] = "NATIVE_ELIGIBILITY_ELIGIBLE";
    CreativeDeclaredAttributesEnum["NonVpaid"] = "NON_VPAID";
    CreativeDeclaredAttributesEnum["NativeEligibilityNotEligible"] = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE";
    CreativeDeclaredAttributesEnum["AnyInterstitial"] = "ANY_INTERSTITIAL";
    CreativeDeclaredAttributesEnum["NonInterstitial"] = "NON_INTERSTITIAL";
    CreativeDeclaredAttributesEnum["InBannerVideo"] = "IN_BANNER_VIDEO";
    CreativeDeclaredAttributesEnum["RenderingSizelessAdx"] = "RENDERING_SIZELESS_ADX";
    CreativeDeclaredAttributesEnum["Omsdk10"] = "OMSDK_1_0";
})(CreativeDeclaredAttributesEnum || (CreativeDeclaredAttributesEnum = {}));
export var CreativeDeclaredRestrictedCategoriesEnum;
(function (CreativeDeclaredRestrictedCategoriesEnum) {
    CreativeDeclaredRestrictedCategoriesEnum["RestrictedCategoryUnspecified"] = "RESTRICTED_CATEGORY_UNSPECIFIED";
    CreativeDeclaredRestrictedCategoriesEnum["Alcohol"] = "ALCOHOL";
})(CreativeDeclaredRestrictedCategoriesEnum || (CreativeDeclaredRestrictedCategoriesEnum = {}));
export var CreativeRestrictedCategoriesEnum;
(function (CreativeRestrictedCategoriesEnum) {
    CreativeRestrictedCategoriesEnum["RestrictedCategoryUnspecified"] = "RESTRICTED_CATEGORY_UNSPECIFIED";
    CreativeRestrictedCategoriesEnum["Alcohol"] = "ALCOHOL";
})(CreativeRestrictedCategoriesEnum || (CreativeRestrictedCategoriesEnum = {}));
// Creative
/**
 * A creative and its classification data.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adChoicesDestinationUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "adChoicesDestinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiUpdateTime" }),
        __metadata("design:type", String)
    ], Creative.prototype, "apiUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeFormat" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeServingDecision" }),
        __metadata("design:type", CreativeServingDecision)
    ], Creative.prototype, "creativeServingDecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "dealIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredAttributes" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "declaredAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredClickThroughUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "declaredClickThroughUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredRestrictedCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "declaredRestrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredVendorIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "declaredVendorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", HtmlContent)
    ], Creative.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "impressionTrackingUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Creative.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native" }),
        __metadata("design:type", NativeContent)
    ], Creative.prototype, "native", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "renderUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "restrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", VideoContent)
    ], Creative.prototype, "video", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
// CreativeInput
/**
 * A creative and its classification data.
**/
var CreativeInput = /** @class */ (function (_super) {
    __extends(CreativeInput, _super);
    function CreativeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adChoicesDestinationUrl" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "adChoicesDestinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeServingDecision" }),
        __metadata("design:type", CreativeServingDecision)
    ], CreativeInput.prototype, "creativeServingDecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredAttributes" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "declaredAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredClickThroughUrls" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "declaredClickThroughUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredRestrictedCategories" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "declaredRestrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredVendorIds" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "declaredVendorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", HtmlContent)
    ], CreativeInput.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrls" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "impressionTrackingUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native" }),
        __metadata("design:type", NativeContent)
    ], CreativeInput.prototype, "native", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderUrl" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "renderUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedCategories" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "restrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", VideoContent)
    ], CreativeInput.prototype, "video", void 0);
    return CreativeInput;
}(SpeakeasyBase));
export { CreativeInput };
