import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
import { TimePeriod } from "./timeperiod";
export declare enum PromotionCouponValueTypeEnum {
    CouponValueTypeUnspecified = "COUPON_VALUE_TYPE_UNSPECIFIED",
    MoneyOff = "MONEY_OFF",
    PercentOff = "PERCENT_OFF",
    BuyMGetNMoneyOff = "BUY_M_GET_N_MONEY_OFF",
    BuyMGetNPercentOff = "BUY_M_GET_N_PERCENT_OFF",
    BuyMGetMoneyOff = "BUY_M_GET_MONEY_OFF",
    BuyMGetPercentOff = "BUY_M_GET_PERCENT_OFF",
    FreeGift = "FREE_GIFT",
    FreeGiftWithValue = "FREE_GIFT_WITH_VALUE",
    FreeGiftWithItemId = "FREE_GIFT_WITH_ITEM_ID",
    FreeShippingStandard = "FREE_SHIPPING_STANDARD",
    FreeShippingOvernight = "FREE_SHIPPING_OVERNIGHT",
    FreeShippingTwoDay = "FREE_SHIPPING_TWO_DAY"
}
export declare enum PromotionOfferTypeEnum {
    OfferTypeUnspecified = "OFFER_TYPE_UNSPECIFIED",
    NoCode = "NO_CODE",
    GenericCode = "GENERIC_CODE"
}
export declare enum PromotionProductApplicabilityEnum {
    ProductApplicabilityUnspecified = "PRODUCT_APPLICABILITY_UNSPECIFIED",
    AllProducts = "ALL_PRODUCTS",
    SpecificProducts = "SPECIFIC_PRODUCTS"
}
export declare enum PromotionRedemptionChannelEnum {
    RedemptionChannelUnspecified = "REDEMPTION_CHANNEL_UNSPECIFIED",
    InStore = "IN_STORE",
    Online = "ONLINE"
}
export declare enum PromotionStoreApplicabilityEnum {
    StoreApplicabilityUnspecified = "STORE_APPLICABILITY_UNSPECIFIED",
    AllStores = "ALL_STORES",
    SpecificStores = "SPECIFIC_STORES"
}
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
export declare class Promotion extends SpeakeasyBase {
    brand?: string[];
    brandExclusion?: string[];
    contentLanguage?: string;
    couponValueType?: PromotionCouponValueTypeEnum;
    freeGiftDescription?: string;
    freeGiftItemId?: string;
    freeGiftValue?: PriceAmount;
    genericRedemptionCode?: string;
    getThisQuantityDiscounted?: number;
    id?: string;
    itemGroupId?: string[];
    itemGroupIdExclusion?: string[];
    itemId?: string[];
    itemIdExclusion?: string[];
    limitQuantity?: number;
    limitValue?: PriceAmount;
    longTitle?: string;
    minimumPurchaseAmount?: PriceAmount;
    minimumPurchaseQuantity?: number;
    moneyBudget?: PriceAmount;
    moneyOffAmount?: PriceAmount;
    offerType?: PromotionOfferTypeEnum;
    orderLimit?: number;
    percentOff?: number;
    productApplicability?: PromotionProductApplicabilityEnum;
    productType?: string[];
    productTypeExclusion?: string[];
    promotionDestinationIds?: string[];
    promotionDisplayDates?: string;
    promotionDisplayTimePeriod?: TimePeriod;
    promotionEffectiveDates?: string;
    promotionEffectiveTimePeriod?: TimePeriod;
    promotionId?: string;
    promotionUrl?: string;
    redemptionChannel?: PromotionRedemptionChannelEnum[];
    shippingServiceNames?: string[];
    storeApplicability?: PromotionStoreApplicabilityEnum;
    storeCode?: string[];
    storeCodeExclusion?: string[];
    targetCountry?: string;
}
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
export declare class PromotionInput extends SpeakeasyBase {
    brand?: string[];
    brandExclusion?: string[];
    contentLanguage?: string;
    couponValueType?: PromotionCouponValueTypeEnum;
    freeGiftDescription?: string;
    freeGiftItemId?: string;
    freeGiftValue?: PriceAmount;
    genericRedemptionCode?: string;
    getThisQuantityDiscounted?: number;
    itemGroupId?: string[];
    itemGroupIdExclusion?: string[];
    itemId?: string[];
    itemIdExclusion?: string[];
    limitQuantity?: number;
    limitValue?: PriceAmount;
    longTitle?: string;
    minimumPurchaseAmount?: PriceAmount;
    minimumPurchaseQuantity?: number;
    moneyBudget?: PriceAmount;
    moneyOffAmount?: PriceAmount;
    offerType?: PromotionOfferTypeEnum;
    orderLimit?: number;
    percentOff?: number;
    productApplicability?: PromotionProductApplicabilityEnum;
    productType?: string[];
    productTypeExclusion?: string[];
    promotionDestinationIds?: string[];
    promotionDisplayDates?: string;
    promotionDisplayTimePeriod?: TimePeriod;
    promotionEffectiveDates?: string;
    promotionEffectiveTimePeriod?: TimePeriod;
    promotionId?: string;
    promotionUrl?: string;
    redemptionChannel?: PromotionRedemptionChannelEnum[];
    shippingServiceNames?: string[];
    storeApplicability?: PromotionStoreApplicabilityEnum;
    storeCode?: string[];
    storeCodeExclusion?: string[];
    targetCountry?: string;
}
