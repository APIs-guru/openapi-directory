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
import { GuaranteedOrderStatus } from "./guaranteedorderstatus";
import { GuaranteedOrderStatusInput } from "./guaranteedorderstatus";
export var GuaranteedOrderExchangeEnum;
(function (GuaranteedOrderExchangeEnum) {
    GuaranteedOrderExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    GuaranteedOrderExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    GuaranteedOrderExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    GuaranteedOrderExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    GuaranteedOrderExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    GuaranteedOrderExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    GuaranteedOrderExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    GuaranteedOrderExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    GuaranteedOrderExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    GuaranteedOrderExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    GuaranteedOrderExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    GuaranteedOrderExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    GuaranteedOrderExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    GuaranteedOrderExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    GuaranteedOrderExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    GuaranteedOrderExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    GuaranteedOrderExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    GuaranteedOrderExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    GuaranteedOrderExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    GuaranteedOrderExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    GuaranteedOrderExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    GuaranteedOrderExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    GuaranteedOrderExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    GuaranteedOrderExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    GuaranteedOrderExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    GuaranteedOrderExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    GuaranteedOrderExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    GuaranteedOrderExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    GuaranteedOrderExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    GuaranteedOrderExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    GuaranteedOrderExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    GuaranteedOrderExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    GuaranteedOrderExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    GuaranteedOrderExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    GuaranteedOrderExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    GuaranteedOrderExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    GuaranteedOrderExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    GuaranteedOrderExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    GuaranteedOrderExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    GuaranteedOrderExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    GuaranteedOrderExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    GuaranteedOrderExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    GuaranteedOrderExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    GuaranteedOrderExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    GuaranteedOrderExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    GuaranteedOrderExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    GuaranteedOrderExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    GuaranteedOrderExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    GuaranteedOrderExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    GuaranteedOrderExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    GuaranteedOrderExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    GuaranteedOrderExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    GuaranteedOrderExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    GuaranteedOrderExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    GuaranteedOrderExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    GuaranteedOrderExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    GuaranteedOrderExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    GuaranteedOrderExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    GuaranteedOrderExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    GuaranteedOrderExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    GuaranteedOrderExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    GuaranteedOrderExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    GuaranteedOrderExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    GuaranteedOrderExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    GuaranteedOrderExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    GuaranteedOrderExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    GuaranteedOrderExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    GuaranteedOrderExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    GuaranteedOrderExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(GuaranteedOrderExchangeEnum || (GuaranteedOrderExchangeEnum = {}));
// GuaranteedOrder
/**
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
**/
var GuaranteedOrder = /** @class */ (function (_super) {
    __extends(GuaranteedOrder, _super);
    function GuaranteedOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAdvertiserId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "defaultAdvertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCampaignId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "defaultCampaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteedOrderId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "guaranteedOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyGuaranteedOrderId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "legacyGuaranteedOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherName" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "publisherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAccessInherited" }),
        __metadata("design:type", Boolean)
    ], GuaranteedOrder.prototype, "readAccessInherited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAdvertiserIds" }),
        __metadata("design:type", Array)
    ], GuaranteedOrder.prototype, "readAdvertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWriteAdvertiserId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "readWriteAdvertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWritePartnerId" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "readWritePartnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GuaranteedOrderStatus)
    ], GuaranteedOrder.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GuaranteedOrder.prototype, "updateTime", void 0);
    return GuaranteedOrder;
}(SpeakeasyBase));
export { GuaranteedOrder };
// GuaranteedOrderInput
/**
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
**/
var GuaranteedOrderInput = /** @class */ (function (_super) {
    __extends(GuaranteedOrderInput, _super);
    function GuaranteedOrderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCampaignId" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "defaultCampaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherName" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "publisherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAccessInherited" }),
        __metadata("design:type", Boolean)
    ], GuaranteedOrderInput.prototype, "readAccessInherited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAdvertiserIds" }),
        __metadata("design:type", Array)
    ], GuaranteedOrderInput.prototype, "readAdvertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWriteAdvertiserId" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "readWriteAdvertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readWritePartnerId" }),
        __metadata("design:type", String)
    ], GuaranteedOrderInput.prototype, "readWritePartnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GuaranteedOrderStatusInput)
    ], GuaranteedOrderInput.prototype, "status", void 0);
    return GuaranteedOrderInput;
}(SpeakeasyBase));
export { GuaranteedOrderInput };
