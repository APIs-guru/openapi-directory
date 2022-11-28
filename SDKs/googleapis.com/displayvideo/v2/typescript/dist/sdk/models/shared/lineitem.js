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
import { BiddingStrategy } from "./biddingstrategy";
import { LineItemBudgetInput } from "./lineitembudget";
import { ConversionCountingConfig } from "./conversioncountingconfig";
import { LineItemFlight } from "./lineitemflight";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { MobileAppInput } from "./mobileapp";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PartnerRevenueModel } from "./partnerrevenuemodel";
import { TargetingExpansionConfig } from "./targetingexpansionconfig";
import { YoutubeAndPartnersSettings } from "./youtubeandpartnerssettings";
import { LineItemBudget } from "./lineitembudget";
import { MobileApp } from "./mobileapp";
export var LineItemEntityStatusEnum;
(function (LineItemEntityStatusEnum) {
    LineItemEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    LineItemEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    LineItemEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    LineItemEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    LineItemEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    LineItemEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(LineItemEntityStatusEnum || (LineItemEntityStatusEnum = {}));
export var LineItemLineItemTypeEnum;
(function (LineItemLineItemTypeEnum) {
    LineItemLineItemTypeEnum["LineItemTypeUnspecified"] = "LINE_ITEM_TYPE_UNSPECIFIED";
    LineItemLineItemTypeEnum["LineItemTypeDisplayDefault"] = "LINE_ITEM_TYPE_DISPLAY_DEFAULT";
    LineItemLineItemTypeEnum["LineItemTypeDisplayMobileAppInstall"] = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL";
    LineItemLineItemTypeEnum["LineItemTypeVideoDefault"] = "LINE_ITEM_TYPE_VIDEO_DEFAULT";
    LineItemLineItemTypeEnum["LineItemTypeVideoMobileAppInstall"] = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL";
    LineItemLineItemTypeEnum["LineItemTypeDisplayMobileAppInventory"] = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY";
    LineItemLineItemTypeEnum["LineItemTypeVideoMobileAppInventory"] = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY";
    LineItemLineItemTypeEnum["LineItemTypeAudioDefault"] = "LINE_ITEM_TYPE_AUDIO_DEFAULT";
    LineItemLineItemTypeEnum["LineItemTypeVideoOverTheTop"] = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersAction"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersNonSkippable"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersVideoSequence"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersAudio"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersReach"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersSimple"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersNonSkippableOverTheTop"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersReachOverTheTop"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP";
    LineItemLineItemTypeEnum["LineItemTypeYoutubeAndPartnersSimpleOverTheTop"] = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP";
})(LineItemLineItemTypeEnum || (LineItemLineItemTypeEnum = {}));
export var LineItemReservationTypeEnum;
(function (LineItemReservationTypeEnum) {
    LineItemReservationTypeEnum["ReservationTypeUnspecified"] = "RESERVATION_TYPE_UNSPECIFIED";
    LineItemReservationTypeEnum["ReservationTypeNotGuaranteed"] = "RESERVATION_TYPE_NOT_GUARANTEED";
    LineItemReservationTypeEnum["ReservationTypeProgrammaticGuaranteed"] = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED";
    LineItemReservationTypeEnum["ReservationTypeTagGuaranteed"] = "RESERVATION_TYPE_TAG_GUARANTEED";
    LineItemReservationTypeEnum["ReservationTypePetraViral"] = "RESERVATION_TYPE_PETRA_VIRAL";
    LineItemReservationTypeEnum["ReservationTypeInstantReserve"] = "RESERVATION_TYPE_INSTANT_RESERVE";
})(LineItemReservationTypeEnum || (LineItemReservationTypeEnum = {}));
export var LineItemWarningMessagesEnum;
(function (LineItemWarningMessagesEnum) {
    LineItemWarningMessagesEnum["LineItemWarningMessageUnspecified"] = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED";
    LineItemWarningMessagesEnum["InvalidFlightDates"] = "INVALID_FLIGHT_DATES";
    LineItemWarningMessagesEnum["Expired"] = "EXPIRED";
    LineItemWarningMessagesEnum["PendingFlight"] = "PENDING_FLIGHT";
    LineItemWarningMessagesEnum["AllPartnerEnabledExchangesNegativelyTargeted"] = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED";
    LineItemWarningMessagesEnum["InvalidInventorySource"] = "INVALID_INVENTORY_SOURCE";
    LineItemWarningMessagesEnum["AppInventoryInvalidSiteTargeting"] = "APP_INVENTORY_INVALID_SITE_TARGETING";
    LineItemWarningMessagesEnum["AppInventoryInvalidAudienceLists"] = "APP_INVENTORY_INVALID_AUDIENCE_LISTS";
    LineItemWarningMessagesEnum["NoValidCreative"] = "NO_VALID_CREATIVE";
    LineItemWarningMessagesEnum["ParentInsertionOrderPaused"] = "PARENT_INSERTION_ORDER_PAUSED";
    LineItemWarningMessagesEnum["ParentInsertionOrderExpired"] = "PARENT_INSERTION_ORDER_EXPIRED";
})(LineItemWarningMessagesEnum || (LineItemWarningMessagesEnum = {}));
// LineItemInput
/**
 * A single line item.
**/
var LineItemInput = /** @class */ (function (_super) {
    __extends(LineItemInput, _super);
    function LineItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidStrategy" }),
        __metadata("design:type", BiddingStrategy)
    ], LineItemInput.prototype, "bidStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", LineItemBudgetInput)
    ], LineItemInput.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionCounting" }),
        __metadata("design:type", ConversionCountingConfig)
    ], LineItemInput.prototype, "conversionCounting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeIds" }),
        __metadata("design:type", Array)
    ], LineItemInput.prototype, "creativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], LineItemInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], LineItemInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeNewExchanges" }),
        __metadata("design:type", Boolean)
    ], LineItemInput.prototype, "excludeNewExchanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flight" }),
        __metadata("design:type", LineItemFlight)
    ], LineItemInput.prototype, "flight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], LineItemInput.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderId" }),
        __metadata("design:type", String)
    ], LineItemInput.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], LineItemInput.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemType" }),
        __metadata("design:type", String)
    ], LineItemInput.prototype, "lineItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApp" }),
        __metadata("design:type", MobileAppInput)
    ], LineItemInput.prototype, "mobileApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacing" }),
        __metadata("design:type", Pacing)
    ], LineItemInput.prototype, "pacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost }),
        __metadata("design:type", Array)
    ], LineItemInput.prototype, "partnerCosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerRevenueModel" }),
        __metadata("design:type", PartnerRevenueModel)
    ], LineItemInput.prototype, "partnerRevenueModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingExpansion" }),
        __metadata("design:type", TargetingExpansionConfig)
    ], LineItemInput.prototype, "targetingExpansion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeAndPartnersSettings" }),
        __metadata("design:type", YoutubeAndPartnersSettings)
    ], LineItemInput.prototype, "youtubeAndPartnersSettings", void 0);
    return LineItemInput;
}(SpeakeasyBase));
export { LineItemInput };
// LineItem
/**
 * A single line item.
**/
var LineItem = /** @class */ (function (_super) {
    __extends(LineItem, _super);
    function LineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidStrategy" }),
        __metadata("design:type", BiddingStrategy)
    ], LineItem.prototype, "bidStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", LineItemBudget)
    ], LineItem.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionCounting" }),
        __metadata("design:type", ConversionCountingConfig)
    ], LineItem.prototype, "conversionCounting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeIds" }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "creativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeNewExchanges" }),
        __metadata("design:type", Boolean)
    ], LineItem.prototype, "excludeNewExchanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flight" }),
        __metadata("design:type", LineItemFlight)
    ], LineItem.prototype, "flight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], LineItem.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], LineItem.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemType" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "lineItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApp" }),
        __metadata("design:type", MobileApp)
    ], LineItem.prototype, "mobileApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacing" }),
        __metadata("design:type", Pacing)
    ], LineItem.prototype, "pacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "partnerCosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerRevenueModel" }),
        __metadata("design:type", PartnerRevenueModel)
    ], LineItem.prototype, "partnerRevenueModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservationType" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "reservationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingExpansion" }),
        __metadata("design:type", TargetingExpansionConfig)
    ], LineItem.prototype, "targetingExpansion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningMessages" }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "warningMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeAndPartnersSettings" }),
        __metadata("design:type", YoutubeAndPartnersSettings)
    ], LineItem.prototype, "youtubeAndPartnersSettings", void 0);
    return LineItem;
}(SpeakeasyBase));
export { LineItem };
