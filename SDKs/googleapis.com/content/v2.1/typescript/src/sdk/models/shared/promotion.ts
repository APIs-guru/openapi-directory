import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
import { TimePeriod } from "./timeperiod";


export enum PromotionCouponValueTypeEnum {
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

export enum PromotionOfferTypeEnum {
    OfferTypeUnspecified = "OFFER_TYPE_UNSPECIFIED",
    NoCode = "NO_CODE",
    GenericCode = "GENERIC_CODE"
}

export enum PromotionProductApplicabilityEnum {
    ProductApplicabilityUnspecified = "PRODUCT_APPLICABILITY_UNSPECIFIED",
    AllProducts = "ALL_PRODUCTS",
    SpecificProducts = "SPECIFIC_PRODUCTS"
}

export enum PromotionRedemptionChannelEnum {
    RedemptionChannelUnspecified = "REDEMPTION_CHANNEL_UNSPECIFIED",
    InStore = "IN_STORE",
    Online = "ONLINE"
}

export enum PromotionStoreApplicabilityEnum {
    StoreApplicabilityUnspecified = "STORE_APPLICABILITY_UNSPECIFIED",
    AllStores = "ALL_STORES",
    SpecificStores = "SPECIFIC_STORES"
}


// Promotion
/** 
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
export class Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string[];

  @SpeakeasyMetadata({ data: "json, name=brandExclusion" })
  brandExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=couponValueType" })
  couponValueType?: PromotionCouponValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=freeGiftDescription" })
  freeGiftDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=freeGiftItemId" })
  freeGiftItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=freeGiftValue" })
  freeGiftValue?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=genericRedemptionCode" })
  genericRedemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=getThisQuantityDiscounted" })
  getThisQuantityDiscounted?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemGroupIdExclusion" })
  itemGroupIdExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemIdExclusion" })
  itemIdExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=limitQuantity" })
  limitQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=limitValue" })
  limitValue?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumPurchaseAmount" })
  minimumPurchaseAmount?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=minimumPurchaseQuantity" })
  minimumPurchaseQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=moneyBudget" })
  moneyBudget?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=moneyOffAmount" })
  moneyOffAmount?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=offerType" })
  offerType?: PromotionOfferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=orderLimit" })
  orderLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=percentOff" })
  percentOff?: number;

  @SpeakeasyMetadata({ data: "json, name=productApplicability" })
  productApplicability?: PromotionProductApplicabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: string[];

  @SpeakeasyMetadata({ data: "json, name=productTypeExclusion" })
  productTypeExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionDestinationIds" })
  promotionDestinationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionDisplayDates" })
  promotionDisplayDates?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionDisplayTimePeriod" })
  promotionDisplayTimePeriod?: TimePeriod;

  @SpeakeasyMetadata({ data: "json, name=promotionEffectiveDates" })
  promotionEffectiveDates?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionEffectiveTimePeriod" })
  promotionEffectiveTimePeriod?: TimePeriod;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionUrl" })
  promotionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=redemptionChannel" })
  redemptionChannel?: PromotionRedemptionChannelEnum[];

  @SpeakeasyMetadata({ data: "json, name=shippingServiceNames" })
  shippingServiceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=storeApplicability" })
  storeApplicability?: PromotionStoreApplicabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string[];

  @SpeakeasyMetadata({ data: "json, name=storeCodeExclusion" })
  storeCodeExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;
}


// PromotionInput
/** 
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
export class PromotionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string[];

  @SpeakeasyMetadata({ data: "json, name=brandExclusion" })
  brandExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=couponValueType" })
  couponValueType?: PromotionCouponValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=freeGiftDescription" })
  freeGiftDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=freeGiftItemId" })
  freeGiftItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=freeGiftValue" })
  freeGiftValue?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=genericRedemptionCode" })
  genericRedemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=getThisQuantityDiscounted" })
  getThisQuantityDiscounted?: number;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemGroupIdExclusion" })
  itemGroupIdExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemIdExclusion" })
  itemIdExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=limitQuantity" })
  limitQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=limitValue" })
  limitValue?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumPurchaseAmount" })
  minimumPurchaseAmount?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=minimumPurchaseQuantity" })
  minimumPurchaseQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=moneyBudget" })
  moneyBudget?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=moneyOffAmount" })
  moneyOffAmount?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=offerType" })
  offerType?: PromotionOfferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=orderLimit" })
  orderLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=percentOff" })
  percentOff?: number;

  @SpeakeasyMetadata({ data: "json, name=productApplicability" })
  productApplicability?: PromotionProductApplicabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: string[];

  @SpeakeasyMetadata({ data: "json, name=productTypeExclusion" })
  productTypeExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionDestinationIds" })
  promotionDestinationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionDisplayDates" })
  promotionDisplayDates?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionDisplayTimePeriod" })
  promotionDisplayTimePeriod?: TimePeriod;

  @SpeakeasyMetadata({ data: "json, name=promotionEffectiveDates" })
  promotionEffectiveDates?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionEffectiveTimePeriod" })
  promotionEffectiveTimePeriod?: TimePeriod;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionUrl" })
  promotionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=redemptionChannel" })
  redemptionChannel?: PromotionRedemptionChannelEnum[];

  @SpeakeasyMetadata({ data: "json, name=shippingServiceNames" })
  shippingServiceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=storeApplicability" })
  storeApplicability?: PromotionStoreApplicabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string[];

  @SpeakeasyMetadata({ data: "json, name=storeCodeExclusion" })
  storeCodeExclusion?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;
}
