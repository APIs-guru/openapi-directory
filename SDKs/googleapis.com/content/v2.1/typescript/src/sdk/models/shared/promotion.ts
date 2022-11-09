import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PriceAmount } from "./priceamount";
import { PriceAmount } from "./priceamount";
import { PriceAmount } from "./priceamount";
import { PriceAmount } from "./priceamount";
import { PriceAmount } from "./priceamount";
import { TimePeriod } from "./timeperiod";
import { TimePeriod } from "./timeperiod";

export enum PromotionCouponValueTypeEnum {
    CouponValueTypeUnspecified = "COUPON_VALUE_TYPE_UNSPECIFIED"
,    MoneyOff = "MONEY_OFF"
,    PercentOff = "PERCENT_OFF"
,    BuyMGetNMoneyOff = "BUY_M_GET_N_MONEY_OFF"
,    BuyMGetNPercentOff = "BUY_M_GET_N_PERCENT_OFF"
,    BuyMGetMoneyOff = "BUY_M_GET_MONEY_OFF"
,    BuyMGetPercentOff = "BUY_M_GET_PERCENT_OFF"
,    FreeGift = "FREE_GIFT"
,    FreeGiftWithValue = "FREE_GIFT_WITH_VALUE"
,    FreeGiftWithItemId = "FREE_GIFT_WITH_ITEM_ID"
,    FreeShippingStandard = "FREE_SHIPPING_STANDARD"
,    FreeShippingOvernight = "FREE_SHIPPING_OVERNIGHT"
,    FreeShippingTwoDay = "FREE_SHIPPING_TWO_DAY"
}

export enum PromotionOfferTypeEnum {
    OfferTypeUnspecified = "OFFER_TYPE_UNSPECIFIED"
,    NoCode = "NO_CODE"
,    GenericCode = "GENERIC_CODE"
}

export enum PromotionProductApplicabilityEnum {
    ProductApplicabilityUnspecified = "PRODUCT_APPLICABILITY_UNSPECIFIED"
,    AllProducts = "ALL_PRODUCTS"
,    SpecificProducts = "SPECIFIC_PRODUCTS"
}

export enum PromotionRedemptionChannelEnum {
    RedemptionChannelUnspecified = "REDEMPTION_CHANNEL_UNSPECIFIED"
,    InStore = "IN_STORE"
,    Online = "ONLINE"
}


// Promotion
/** 
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
**/
export class Promotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string[];

  @Metadata({ data: "json, name=brandExclusion" })
  brandExclusion?: string[];

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=couponValueType" })
  couponValueType?: PromotionCouponValueTypeEnum;

  @Metadata({ data: "json, name=freeGiftDescription" })
  freeGiftDescription?: string;

  @Metadata({ data: "json, name=freeGiftItemId" })
  freeGiftItemId?: string;

  @Metadata({ data: "json, name=freeGiftValue" })
  freeGiftValue?: PriceAmount;

  @Metadata({ data: "json, name=genericRedemptionCode" })
  genericRedemptionCode?: string;

  @Metadata({ data: "json, name=getThisQuantityDiscounted" })
  getThisQuantityDiscounted?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string[];

  @Metadata({ data: "json, name=itemGroupIdExclusion" })
  itemGroupIdExclusion?: string[];

  @Metadata({ data: "json, name=itemId" })
  itemId?: string[];

  @Metadata({ data: "json, name=itemIdExclusion" })
  itemIdExclusion?: string[];

  @Metadata({ data: "json, name=limitQuantity" })
  limitQuantity?: number;

  @Metadata({ data: "json, name=limitValue" })
  limitValue?: PriceAmount;

  @Metadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @Metadata({ data: "json, name=minimumPurchaseAmount" })
  minimumPurchaseAmount?: PriceAmount;

  @Metadata({ data: "json, name=minimumPurchaseQuantity" })
  minimumPurchaseQuantity?: number;

  @Metadata({ data: "json, name=moneyBudget" })
  moneyBudget?: PriceAmount;

  @Metadata({ data: "json, name=moneyOffAmount" })
  moneyOffAmount?: PriceAmount;

  @Metadata({ data: "json, name=offerType" })
  offerType?: PromotionOfferTypeEnum;

  @Metadata({ data: "json, name=orderLimit" })
  orderLimit?: number;

  @Metadata({ data: "json, name=percentOff" })
  percentOff?: number;

  @Metadata({ data: "json, name=productApplicability" })
  productApplicability?: PromotionProductApplicabilityEnum;

  @Metadata({ data: "json, name=productType" })
  productType?: string[];

  @Metadata({ data: "json, name=productTypeExclusion" })
  productTypeExclusion?: string[];

  @Metadata({ data: "json, name=promotionDestinationIds" })
  promotionDestinationIds?: string[];

  @Metadata({ data: "json, name=promotionDisplayDates" })
  promotionDisplayDates?: string;

  @Metadata({ data: "json, name=promotionDisplayTimePeriod" })
  promotionDisplayTimePeriod?: TimePeriod;

  @Metadata({ data: "json, name=promotionEffectiveDates" })
  promotionEffectiveDates?: string;

  @Metadata({ data: "json, name=promotionEffectiveTimePeriod" })
  promotionEffectiveTimePeriod?: TimePeriod;

  @Metadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @Metadata({ data: "json, name=redemptionChannel" })
  redemptionChannel?: PromotionRedemptionChannelEnum[];

  @Metadata({ data: "json, name=shippingServiceNames" })
  shippingServiceNames?: string[];

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;
}
