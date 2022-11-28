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
import { CreativeConfig } from "./creativeconfig";
import { RateDetails } from "./ratedetails";
import { InventorySourceAccessors } from "./inventorysourceaccessors";
import { InventorySourceStatus } from "./inventorysourcestatus";
import { TimeRange } from "./timerange";
import { InventorySourceStatusInput } from "./inventorysourcestatus";
export var InventorySourceCommitmentEnum;
(function (InventorySourceCommitmentEnum) {
    InventorySourceCommitmentEnum["InventorySourceCommitmentUnspecified"] = "INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED";
    InventorySourceCommitmentEnum["InventorySourceCommitmentGuaranteed"] = "INVENTORY_SOURCE_COMMITMENT_GUARANTEED";
    InventorySourceCommitmentEnum["InventorySourceCommitmentNonGuaranteed"] = "INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED";
})(InventorySourceCommitmentEnum || (InventorySourceCommitmentEnum = {}));
export var InventorySourceDeliveryMethodEnum;
(function (InventorySourceDeliveryMethodEnum) {
    InventorySourceDeliveryMethodEnum["InventorySourceDeliveryMethodUnspecified"] = "INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED";
    InventorySourceDeliveryMethodEnum["InventorySourceDeliveryMethodProgrammatic"] = "INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC";
    InventorySourceDeliveryMethodEnum["InventorySourceDeliveryMethodTag"] = "INVENTORY_SOURCE_DELIVERY_METHOD_TAG";
})(InventorySourceDeliveryMethodEnum || (InventorySourceDeliveryMethodEnum = {}));
export var InventorySourceExchangeEnum;
(function (InventorySourceExchangeEnum) {
    InventorySourceExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    InventorySourceExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    InventorySourceExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    InventorySourceExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    InventorySourceExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    InventorySourceExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    InventorySourceExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    InventorySourceExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    InventorySourceExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    InventorySourceExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    InventorySourceExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    InventorySourceExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    InventorySourceExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    InventorySourceExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    InventorySourceExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    InventorySourceExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    InventorySourceExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    InventorySourceExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    InventorySourceExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    InventorySourceExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    InventorySourceExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    InventorySourceExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    InventorySourceExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    InventorySourceExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    InventorySourceExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    InventorySourceExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    InventorySourceExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    InventorySourceExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    InventorySourceExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    InventorySourceExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    InventorySourceExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    InventorySourceExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    InventorySourceExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    InventorySourceExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    InventorySourceExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    InventorySourceExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    InventorySourceExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    InventorySourceExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    InventorySourceExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    InventorySourceExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    InventorySourceExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    InventorySourceExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    InventorySourceExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    InventorySourceExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    InventorySourceExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    InventorySourceExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    InventorySourceExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    InventorySourceExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    InventorySourceExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    InventorySourceExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    InventorySourceExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    InventorySourceExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    InventorySourceExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    InventorySourceExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    InventorySourceExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    InventorySourceExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    InventorySourceExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    InventorySourceExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    InventorySourceExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    InventorySourceExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    InventorySourceExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    InventorySourceExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    InventorySourceExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    InventorySourceExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    InventorySourceExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    InventorySourceExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    InventorySourceExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    InventorySourceExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    InventorySourceExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(InventorySourceExchangeEnum || (InventorySourceExchangeEnum = {}));
export var InventorySourceInventorySourceProductTypeEnum;
(function (InventorySourceInventorySourceProductTypeEnum) {
    InventorySourceInventorySourceProductTypeEnum["InventorySourceProductTypeUnspecified"] = "INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED";
    InventorySourceInventorySourceProductTypeEnum["PreferredDeal"] = "PREFERRED_DEAL";
    InventorySourceInventorySourceProductTypeEnum["PrivateAuction"] = "PRIVATE_AUCTION";
    InventorySourceInventorySourceProductTypeEnum["ProgrammaticGuaranteed"] = "PROGRAMMATIC_GUARANTEED";
    InventorySourceInventorySourceProductTypeEnum["TagGuaranteed"] = "TAG_GUARANTEED";
    InventorySourceInventorySourceProductTypeEnum["YoutubeReserve"] = "YOUTUBE_RESERVE";
    InventorySourceInventorySourceProductTypeEnum["InstantReserve"] = "INSTANT_RESERVE";
    InventorySourceInventorySourceProductTypeEnum["GuaranteedPackage"] = "GUARANTEED_PACKAGE";
    InventorySourceInventorySourceProductTypeEnum["ProgrammaticTv"] = "PROGRAMMATIC_TV";
    InventorySourceInventorySourceProductTypeEnum["AuctionPackage"] = "AUCTION_PACKAGE";
})(InventorySourceInventorySourceProductTypeEnum || (InventorySourceInventorySourceProductTypeEnum = {}));
export var InventorySourceInventorySourceTypeEnum;
(function (InventorySourceInventorySourceTypeEnum) {
    InventorySourceInventorySourceTypeEnum["InventorySourceTypeUnspecified"] = "INVENTORY_SOURCE_TYPE_UNSPECIFIED";
    InventorySourceInventorySourceTypeEnum["InventorySourceTypePrivate"] = "INVENTORY_SOURCE_TYPE_PRIVATE";
    InventorySourceInventorySourceTypeEnum["InventorySourceTypeAuctionPackage"] = "INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE";
})(InventorySourceInventorySourceTypeEnum || (InventorySourceInventorySourceTypeEnum = {}));
// InventorySource
/**
 * An inventory source.
**/
var InventorySource = /** @class */ (function (_super) {
    __extends(InventorySource, _super);
    function InventorySource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitment" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "commitment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeConfigs", elemType: CreativeConfig }),
        __metadata("design:type", Array)
    ], InventorySource.prototype, "creativeConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "dealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryMethod" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "deliveryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteedOrderId" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "guaranteedOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceId" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "inventorySourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceProductType" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "inventorySourceProductType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceType" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "inventorySourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherName" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "publisherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateDetails" }),
        __metadata("design:type", RateDetails)
    ], InventorySource.prototype, "rateDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAdvertiserIds" }),
        __metadata("design:type", Array)
    ], InventorySource.prototype, "readAdvertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readPartnerIds" }),
        __metadata("design:type", Array)
    ], InventorySource.prototype, "readPartnerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWriteAccessors" }),
        __metadata("design:type", InventorySourceAccessors)
    ], InventorySource.prototype, "readWriteAccessors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", InventorySourceStatus)
    ], InventorySource.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subSitePropertyId" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "subSitePropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeRange" }),
        __metadata("design:type", TimeRange)
    ], InventorySource.prototype, "timeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], InventorySource.prototype, "updateTime", void 0);
    return InventorySource;
}(SpeakeasyBase));
export { InventorySource };
// InventorySourceInput
/**
 * An inventory source.
**/
var InventorySourceInput = /** @class */ (function (_super) {
    __extends(InventorySourceInput, _super);
    function InventorySourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitment" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "commitment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeConfigs", elemType: CreativeConfig }),
        __metadata("design:type", Array)
    ], InventorySourceInput.prototype, "creativeConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "dealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryMethod" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "deliveryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteedOrderId" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "guaranteedOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceType" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "inventorySourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherName" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "publisherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateDetails" }),
        __metadata("design:type", RateDetails)
    ], InventorySourceInput.prototype, "rateDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWriteAccessors" }),
        __metadata("design:type", InventorySourceAccessors)
    ], InventorySourceInput.prototype, "readWriteAccessors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", InventorySourceStatusInput)
    ], InventorySourceInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subSitePropertyId" }),
        __metadata("design:type", String)
    ], InventorySourceInput.prototype, "subSitePropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeRange" }),
        __metadata("design:type", TimeRange)
    ], InventorySourceInput.prototype, "timeRange", void 0);
    return InventorySourceInput;
}(SpeakeasyBase));
export { InventorySourceInput };
