package shared

type PromotionCouponValueTypeEnum string

const (
	PromotionCouponValueTypeEnumCouponValueTypeUnspecified PromotionCouponValueTypeEnum = "COUPON_VALUE_TYPE_UNSPECIFIED"
	PromotionCouponValueTypeEnumMoneyOff                   PromotionCouponValueTypeEnum = "MONEY_OFF"
	PromotionCouponValueTypeEnumPercentOff                 PromotionCouponValueTypeEnum = "PERCENT_OFF"
	PromotionCouponValueTypeEnumBuyMGetNMoneyOff           PromotionCouponValueTypeEnum = "BUY_M_GET_N_MONEY_OFF"
	PromotionCouponValueTypeEnumBuyMGetNPercentOff         PromotionCouponValueTypeEnum = "BUY_M_GET_N_PERCENT_OFF"
	PromotionCouponValueTypeEnumBuyMGetMoneyOff            PromotionCouponValueTypeEnum = "BUY_M_GET_MONEY_OFF"
	PromotionCouponValueTypeEnumBuyMGetPercentOff          PromotionCouponValueTypeEnum = "BUY_M_GET_PERCENT_OFF"
	PromotionCouponValueTypeEnumFreeGift                   PromotionCouponValueTypeEnum = "FREE_GIFT"
	PromotionCouponValueTypeEnumFreeGiftWithValue          PromotionCouponValueTypeEnum = "FREE_GIFT_WITH_VALUE"
	PromotionCouponValueTypeEnumFreeGiftWithItemID         PromotionCouponValueTypeEnum = "FREE_GIFT_WITH_ITEM_ID"
	PromotionCouponValueTypeEnumFreeShippingStandard       PromotionCouponValueTypeEnum = "FREE_SHIPPING_STANDARD"
	PromotionCouponValueTypeEnumFreeShippingOvernight      PromotionCouponValueTypeEnum = "FREE_SHIPPING_OVERNIGHT"
	PromotionCouponValueTypeEnumFreeShippingTwoDay         PromotionCouponValueTypeEnum = "FREE_SHIPPING_TWO_DAY"
)

type PromotionOfferTypeEnum string

const (
	PromotionOfferTypeEnumOfferTypeUnspecified PromotionOfferTypeEnum = "OFFER_TYPE_UNSPECIFIED"
	PromotionOfferTypeEnumNoCode               PromotionOfferTypeEnum = "NO_CODE"
	PromotionOfferTypeEnumGenericCode          PromotionOfferTypeEnum = "GENERIC_CODE"
)

type PromotionProductApplicabilityEnum string

const (
	PromotionProductApplicabilityEnumProductApplicabilityUnspecified PromotionProductApplicabilityEnum = "PRODUCT_APPLICABILITY_UNSPECIFIED"
	PromotionProductApplicabilityEnumAllProducts                     PromotionProductApplicabilityEnum = "ALL_PRODUCTS"
	PromotionProductApplicabilityEnumSpecificProducts                PromotionProductApplicabilityEnum = "SPECIFIC_PRODUCTS"
)

type PromotionRedemptionChannelEnum string

const (
	PromotionRedemptionChannelEnumRedemptionChannelUnspecified PromotionRedemptionChannelEnum = "REDEMPTION_CHANNEL_UNSPECIFIED"
	PromotionRedemptionChannelEnumInStore                      PromotionRedemptionChannelEnum = "IN_STORE"
	PromotionRedemptionChannelEnumOnline                       PromotionRedemptionChannelEnum = "ONLINE"
)

type Promotion struct {
	Brand                        []string                           `json:"brand,omitempty"`
	BrandExclusion               []string                           `json:"brandExclusion,omitempty"`
	ContentLanguage              *string                            `json:"contentLanguage,omitempty"`
	CouponValueType              *PromotionCouponValueTypeEnum      `json:"couponValueType,omitempty"`
	FreeGiftDescription          *string                            `json:"freeGiftDescription,omitempty"`
	FreeGiftItemID               *string                            `json:"freeGiftItemId,omitempty"`
	FreeGiftValue                *PriceAmount                       `json:"freeGiftValue,omitempty"`
	GenericRedemptionCode        *string                            `json:"genericRedemptionCode,omitempty"`
	GetThisQuantityDiscounted    *int32                             `json:"getThisQuantityDiscounted,omitempty"`
	ID                           *string                            `json:"id,omitempty"`
	ItemGroupID                  []string                           `json:"itemGroupId,omitempty"`
	ItemGroupIDExclusion         []string                           `json:"itemGroupIdExclusion,omitempty"`
	ItemID                       []string                           `json:"itemId,omitempty"`
	ItemIDExclusion              []string                           `json:"itemIdExclusion,omitempty"`
	LimitQuantity                *int32                             `json:"limitQuantity,omitempty"`
	LimitValue                   *PriceAmount                       `json:"limitValue,omitempty"`
	LongTitle                    *string                            `json:"longTitle,omitempty"`
	MinimumPurchaseAmount        *PriceAmount                       `json:"minimumPurchaseAmount,omitempty"`
	MinimumPurchaseQuantity      *int32                             `json:"minimumPurchaseQuantity,omitempty"`
	MoneyBudget                  *PriceAmount                       `json:"moneyBudget,omitempty"`
	MoneyOffAmount               *PriceAmount                       `json:"moneyOffAmount,omitempty"`
	OfferType                    *PromotionOfferTypeEnum            `json:"offerType,omitempty"`
	OrderLimit                   *int32                             `json:"orderLimit,omitempty"`
	PercentOff                   *int32                             `json:"percentOff,omitempty"`
	ProductApplicability         *PromotionProductApplicabilityEnum `json:"productApplicability,omitempty"`
	ProductType                  []string                           `json:"productType,omitempty"`
	ProductTypeExclusion         []string                           `json:"productTypeExclusion,omitempty"`
	PromotionDestinationIds      []string                           `json:"promotionDestinationIds,omitempty"`
	PromotionDisplayDates        *string                            `json:"promotionDisplayDates,omitempty"`
	PromotionDisplayTimePeriod   *TimePeriod                        `json:"promotionDisplayTimePeriod,omitempty"`
	PromotionEffectiveDates      *string                            `json:"promotionEffectiveDates,omitempty"`
	PromotionEffectiveTimePeriod *TimePeriod                        `json:"promotionEffectiveTimePeriod,omitempty"`
	PromotionID                  *string                            `json:"promotionId,omitempty"`
	RedemptionChannel            []PromotionRedemptionChannelEnum   `json:"redemptionChannel,omitempty"`
	ShippingServiceNames         []string                           `json:"shippingServiceNames,omitempty"`
	TargetCountry                *string                            `json:"targetCountry,omitempty"`
}
