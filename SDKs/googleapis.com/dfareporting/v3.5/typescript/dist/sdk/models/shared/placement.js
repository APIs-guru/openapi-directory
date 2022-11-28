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
import { Size } from "./size";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { MeasurementPartnerWrappingData } from "./measurementpartnerwrappingdata";
import { PricingSchedule } from "./pricingschedule";
import { TagSetting } from "./tagsetting";
import { VideoSettings } from "./videosettings";
export var PlacementCompatibilityEnum;
(function (PlacementCompatibilityEnum) {
    PlacementCompatibilityEnum["Display"] = "DISPLAY";
    PlacementCompatibilityEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    PlacementCompatibilityEnum["App"] = "APP";
    PlacementCompatibilityEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    PlacementCompatibilityEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    PlacementCompatibilityEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(PlacementCompatibilityEnum || (PlacementCompatibilityEnum = {}));
export var PlacementPaymentSourceEnum;
(function (PlacementPaymentSourceEnum) {
    PlacementPaymentSourceEnum["PlacementAgencyPaid"] = "PLACEMENT_AGENCY_PAID";
    PlacementPaymentSourceEnum["PlacementPublisherPaid"] = "PLACEMENT_PUBLISHER_PAID";
})(PlacementPaymentSourceEnum || (PlacementPaymentSourceEnum = {}));
export var PlacementStatusEnum;
(function (PlacementStatusEnum) {
    PlacementStatusEnum["PendingReview"] = "PENDING_REVIEW";
    PlacementStatusEnum["PaymentAccepted"] = "PAYMENT_ACCEPTED";
    PlacementStatusEnum["PaymentRejected"] = "PAYMENT_REJECTED";
    PlacementStatusEnum["AcknowledgeRejection"] = "ACKNOWLEDGE_REJECTION";
    PlacementStatusEnum["AcknowledgeAcceptance"] = "ACKNOWLEDGE_ACCEPTANCE";
    PlacementStatusEnum["Draft"] = "DRAFT";
})(PlacementStatusEnum || (PlacementStatusEnum = {}));
export var PlacementTagFormatsEnum;
(function (PlacementTagFormatsEnum) {
    PlacementTagFormatsEnum["PlacementTagStandard"] = "PLACEMENT_TAG_STANDARD";
    PlacementTagFormatsEnum["PlacementTagIframeJavascript"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT";
    PlacementTagFormatsEnum["PlacementTagIframeIlayer"] = "PLACEMENT_TAG_IFRAME_ILAYER";
    PlacementTagFormatsEnum["PlacementTagInternalRedirect"] = "PLACEMENT_TAG_INTERNAL_REDIRECT";
    PlacementTagFormatsEnum["PlacementTagJavascript"] = "PLACEMENT_TAG_JAVASCRIPT";
    PlacementTagFormatsEnum["PlacementTagInterstitialIframeJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT";
    PlacementTagFormatsEnum["PlacementTagInterstitialInternalRedirect"] = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT";
    PlacementTagFormatsEnum["PlacementTagInterstitialJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT";
    PlacementTagFormatsEnum["PlacementTagClickCommands"] = "PLACEMENT_TAG_CLICK_COMMANDS";
    PlacementTagFormatsEnum["PlacementTagInstreamVideoPrefetch"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH";
    PlacementTagFormatsEnum["PlacementTagTracking"] = "PLACEMENT_TAG_TRACKING";
    PlacementTagFormatsEnum["PlacementTagTrackingIframe"] = "PLACEMENT_TAG_TRACKING_IFRAME";
    PlacementTagFormatsEnum["PlacementTagTrackingJavascript"] = "PLACEMENT_TAG_TRACKING_JAVASCRIPT";
    PlacementTagFormatsEnum["PlacementTagInstreamVideoPrefetchVast3"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3";
    PlacementTagFormatsEnum["PlacementTagIframeJavascriptLegacy"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY";
    PlacementTagFormatsEnum["PlacementTagJavascriptLegacy"] = "PLACEMENT_TAG_JAVASCRIPT_LEGACY";
    PlacementTagFormatsEnum["PlacementTagInterstitialIframeJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY";
    PlacementTagFormatsEnum["PlacementTagInterstitialJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY";
    PlacementTagFormatsEnum["PlacementTagInstreamVideoPrefetchVast4"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4";
    PlacementTagFormatsEnum["PlacementTagTrackingThirdPartyMeasurement"] = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT";
})(PlacementTagFormatsEnum || (PlacementTagFormatsEnum = {}));
export var PlacementVpaidAdapterChoiceEnum;
(function (PlacementVpaidAdapterChoiceEnum) {
    PlacementVpaidAdapterChoiceEnum["Default"] = "DEFAULT";
    PlacementVpaidAdapterChoiceEnum["Flash"] = "FLASH";
    PlacementVpaidAdapterChoiceEnum["Html5"] = "HTML5";
    PlacementVpaidAdapterChoiceEnum["Both"] = "BOTH";
})(PlacementVpaidAdapterChoiceEnum || (PlacementVpaidAdapterChoiceEnum = {}));
// Placement
/**
 * Contains properties of a placement.
**/
var Placement = /** @class */ (function (_super) {
    __extends(Placement, _super);
    function Placement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adBlockingOptOut" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "adBlockingOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalSizes", elemType: Size }),
        __metadata("design:type", Array)
    ], Placement.prototype, "additionalSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "campaignIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], Placement.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", String)
    ], Placement.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentCategoryId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "contentCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Placement.prototype, "createInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directorySiteId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "directorySiteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directorySiteIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "directorySiteIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Placement.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyName" }),
        __metadata("design:type", String)
    ], Placement.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Placement.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Placement.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookbackConfiguration" }),
        __metadata("design:type", LookbackConfiguration)
    ], Placement.prototype, "lookbackConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Placement.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerWrappingData" }),
        __metadata("design:type", MeasurementPartnerWrappingData)
    ], Placement.prototype, "partnerWrappingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentApproved" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "paymentApproved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentSource" }),
        __metadata("design:type", String)
    ], Placement.prototype, "paymentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementGroupId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "placementGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementGroupIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "placementGroupIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategyId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "placementStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingSchedule" }),
        __metadata("design:type", PricingSchedule)
    ], Placement.prototype, "pricingSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherUpdateInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Placement.prototype, "publisherUpdateInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Placement.prototype, "siteIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], Placement.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslRequired" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Placement.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Placement.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFormats" }),
        __metadata("design:type", Array)
    ], Placement.prototype, "tagFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagSetting" }),
        __metadata("design:type", TagSetting)
    ], Placement.prototype, "tagSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoActiveViewOptOut" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "videoActiveViewOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoSettings" }),
        __metadata("design:type", VideoSettings)
    ], Placement.prototype, "videoSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpaidAdapterChoice" }),
        __metadata("design:type", String)
    ], Placement.prototype, "vpaidAdapterChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrappingOptOut" }),
        __metadata("design:type", Boolean)
    ], Placement.prototype, "wrappingOptOut", void 0);
    return Placement;
}(SpeakeasyBase));
export { Placement };
