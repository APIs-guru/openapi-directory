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
import { PriceAmount } from "./priceamount";
import { TimePeriod } from "./timeperiod";
export var PromotionCouponValueTypeEnum;
(function (PromotionCouponValueTypeEnum) {
    PromotionCouponValueTypeEnum["CouponValueTypeUnspecified"] = "COUPON_VALUE_TYPE_UNSPECIFIED";
    PromotionCouponValueTypeEnum["MoneyOff"] = "MONEY_OFF";
    PromotionCouponValueTypeEnum["PercentOff"] = "PERCENT_OFF";
    PromotionCouponValueTypeEnum["BuyMGetNMoneyOff"] = "BUY_M_GET_N_MONEY_OFF";
    PromotionCouponValueTypeEnum["BuyMGetNPercentOff"] = "BUY_M_GET_N_PERCENT_OFF";
    PromotionCouponValueTypeEnum["BuyMGetMoneyOff"] = "BUY_M_GET_MONEY_OFF";
    PromotionCouponValueTypeEnum["BuyMGetPercentOff"] = "BUY_M_GET_PERCENT_OFF";
    PromotionCouponValueTypeEnum["FreeGift"] = "FREE_GIFT";
    PromotionCouponValueTypeEnum["FreeGiftWithValue"] = "FREE_GIFT_WITH_VALUE";
    PromotionCouponValueTypeEnum["FreeGiftWithItemId"] = "FREE_GIFT_WITH_ITEM_ID";
    PromotionCouponValueTypeEnum["FreeShippingStandard"] = "FREE_SHIPPING_STANDARD";
    PromotionCouponValueTypeEnum["FreeShippingOvernight"] = "FREE_SHIPPING_OVERNIGHT";
    PromotionCouponValueTypeEnum["FreeShippingTwoDay"] = "FREE_SHIPPING_TWO_DAY";
})(PromotionCouponValueTypeEnum || (PromotionCouponValueTypeEnum = {}));
export var PromotionOfferTypeEnum;
(function (PromotionOfferTypeEnum) {
    PromotionOfferTypeEnum["OfferTypeUnspecified"] = "OFFER_TYPE_UNSPECIFIED";
    PromotionOfferTypeEnum["NoCode"] = "NO_CODE";
    PromotionOfferTypeEnum["GenericCode"] = "GENERIC_CODE";
})(PromotionOfferTypeEnum || (PromotionOfferTypeEnum = {}));
export var PromotionProductApplicabilityEnum;
(function (PromotionProductApplicabilityEnum) {
    PromotionProductApplicabilityEnum["ProductApplicabilityUnspecified"] = "PRODUCT_APPLICABILITY_UNSPECIFIED";
    PromotionProductApplicabilityEnum["AllProducts"] = "ALL_PRODUCTS";
    PromotionProductApplicabilityEnum["SpecificProducts"] = "SPECIFIC_PRODUCTS";
})(PromotionProductApplicabilityEnum || (PromotionProductApplicabilityEnum = {}));
export var PromotionRedemptionChannelEnum;
(function (PromotionRedemptionChannelEnum) {
    PromotionRedemptionChannelEnum["RedemptionChannelUnspecified"] = "REDEMPTION_CHANNEL_UNSPECIFIED";
    PromotionRedemptionChannelEnum["InStore"] = "IN_STORE";
    PromotionRedemptionChannelEnum["Online"] = "ONLINE";
})(PromotionRedemptionChannelEnum || (PromotionRedemptionChannelEnum = {}));
export var PromotionStoreApplicabilityEnum;
(function (PromotionStoreApplicabilityEnum) {
    PromotionStoreApplicabilityEnum["StoreApplicabilityUnspecified"] = "STORE_APPLICABILITY_UNSPECIFIED";
    PromotionStoreApplicabilityEnum["AllStores"] = "ALL_STORES";
    PromotionStoreApplicabilityEnum["SpecificStores"] = "SPECIFIC_STORES";
})(PromotionStoreApplicabilityEnum || (PromotionStoreApplicabilityEnum = {}));
// Promotion
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
var Promotion = /** @class */ (function (_super) {
    __extends(Promotion, _super);
    function Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandExclusion" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "brandExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "contentLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=couponValueType" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "couponValueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftDescription" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "freeGiftDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftItemId" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "freeGiftItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftValue" }),
        __metadata("design:type", PriceAmount)
    ], Promotion.prototype, "freeGiftValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genericRedemptionCode" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "genericRedemptionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getThisQuantityDiscounted" }),
        __metadata("design:type", Number)
    ], Promotion.prototype, "getThisQuantityDiscounted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupIdExclusion" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "itemGroupIdExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemIdExclusion" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "itemIdExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitQuantity" }),
        __metadata("design:type", Number)
    ], Promotion.prototype, "limitQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitValue" }),
        __metadata("design:type", PriceAmount)
    ], Promotion.prototype, "limitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longTitle" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "longTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPurchaseAmount" }),
        __metadata("design:type", PriceAmount)
    ], Promotion.prototype, "minimumPurchaseAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPurchaseQuantity" }),
        __metadata("design:type", Number)
    ], Promotion.prototype, "minimumPurchaseQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moneyBudget" }),
        __metadata("design:type", PriceAmount)
    ], Promotion.prototype, "moneyBudget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moneyOffAmount" }),
        __metadata("design:type", PriceAmount)
    ], Promotion.prototype, "moneyOffAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerType" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "offerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderLimit" }),
        __metadata("design:type", Number)
    ], Promotion.prototype, "orderLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentOff" }),
        __metadata("design:type", Number)
    ], Promotion.prototype, "percentOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productApplicability" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "productApplicability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productType" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeExclusion" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "productTypeExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDestinationIds" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "promotionDestinationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDisplayDates" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "promotionDisplayDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDisplayTimePeriod" }),
        __metadata("design:type", TimePeriod)
    ], Promotion.prototype, "promotionDisplayTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionEffectiveDates" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "promotionEffectiveDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionEffectiveTimePeriod" }),
        __metadata("design:type", TimePeriod)
    ], Promotion.prototype, "promotionEffectiveTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionId" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "promotionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionUrl" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "promotionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redemptionChannel" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "redemptionChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServiceNames" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "shippingServiceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeApplicability" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "storeApplicability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCodeExclusion" }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "storeCodeExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCountry" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "targetCountry", void 0);
    return Promotion;
}(SpeakeasyBase));
export { Promotion };
// PromotionInput
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
var PromotionInput = /** @class */ (function (_super) {
    __extends(PromotionInput, _super);
    function PromotionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandExclusion" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "brandExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "contentLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=couponValueType" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "couponValueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftDescription" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "freeGiftDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftItemId" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "freeGiftItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeGiftValue" }),
        __metadata("design:type", PriceAmount)
    ], PromotionInput.prototype, "freeGiftValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genericRedemptionCode" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "genericRedemptionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getThisQuantityDiscounted" }),
        __metadata("design:type", Number)
    ], PromotionInput.prototype, "getThisQuantityDiscounted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupIdExclusion" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "itemGroupIdExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemIdExclusion" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "itemIdExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitQuantity" }),
        __metadata("design:type", Number)
    ], PromotionInput.prototype, "limitQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitValue" }),
        __metadata("design:type", PriceAmount)
    ], PromotionInput.prototype, "limitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longTitle" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "longTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPurchaseAmount" }),
        __metadata("design:type", PriceAmount)
    ], PromotionInput.prototype, "minimumPurchaseAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPurchaseQuantity" }),
        __metadata("design:type", Number)
    ], PromotionInput.prototype, "minimumPurchaseQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moneyBudget" }),
        __metadata("design:type", PriceAmount)
    ], PromotionInput.prototype, "moneyBudget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moneyOffAmount" }),
        __metadata("design:type", PriceAmount)
    ], PromotionInput.prototype, "moneyOffAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerType" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "offerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderLimit" }),
        __metadata("design:type", Number)
    ], PromotionInput.prototype, "orderLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentOff" }),
        __metadata("design:type", Number)
    ], PromotionInput.prototype, "percentOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productApplicability" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "productApplicability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productType" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeExclusion" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "productTypeExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDestinationIds" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "promotionDestinationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDisplayDates" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "promotionDisplayDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionDisplayTimePeriod" }),
        __metadata("design:type", TimePeriod)
    ], PromotionInput.prototype, "promotionDisplayTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionEffectiveDates" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "promotionEffectiveDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionEffectiveTimePeriod" }),
        __metadata("design:type", TimePeriod)
    ], PromotionInput.prototype, "promotionEffectiveTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionId" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "promotionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionUrl" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "promotionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redemptionChannel" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "redemptionChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServiceNames" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "shippingServiceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeApplicability" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "storeApplicability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCodeExclusion" }),
        __metadata("design:type", Array)
    ], PromotionInput.prototype, "storeCodeExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCountry" }),
        __metadata("design:type", String)
    ], PromotionInput.prototype, "targetCountry", void 0);
    return PromotionInput;
}(SpeakeasyBase));
export { PromotionInput };
