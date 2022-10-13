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
	Brand                        []string                           `json:"brand"`
	BrandExclusion               []string                           `json:"brandExclusion"`
	ContentLanguage              *string                            `json:"contentLanguage"`
	CouponValueType              *PromotionCouponValueTypeEnum      `json:"couponValueType"`
	FreeGiftDescription          *string                            `json:"freeGiftDescription"`
	FreeGiftItemID               *string                            `json:"freeGiftItemId"`
	FreeGiftValue                *PriceAmount                       `json:"freeGiftValue"`
	GenericRedemptionCode        *string                            `json:"genericRedemptionCode"`
	GetThisQuantityDiscounted    *int32                             `json:"getThisQuantityDiscounted"`
	ID                           *string                            `json:"id"`
	ItemGroupID                  []string                           `json:"itemGroupId"`
	ItemGroupIDExclusion         []string                           `json:"itemGroupIdExclusion"`
	ItemID                       []string                           `json:"itemId"`
	ItemIDExclusion              []string                           `json:"itemIdExclusion"`
	LimitQuantity                *int32                             `json:"limitQuantity"`
	LimitValue                   *PriceAmount                       `json:"limitValue"`
	LongTitle                    *string                            `json:"longTitle"`
	MinimumPurchaseAmount        *PriceAmount                       `json:"minimumPurchaseAmount"`
	MinimumPurchaseQuantity      *int32                             `json:"minimumPurchaseQuantity"`
	MoneyBudget                  *PriceAmount                       `json:"moneyBudget"`
	MoneyOffAmount               *PriceAmount                       `json:"moneyOffAmount"`
	OfferType                    *PromotionOfferTypeEnum            `json:"offerType"`
	OrderLimit                   *int32                             `json:"orderLimit"`
	PercentOff                   *int32                             `json:"percentOff"`
	ProductApplicability         *PromotionProductApplicabilityEnum `json:"productApplicability"`
	ProductType                  []string                           `json:"productType"`
	ProductTypeExclusion         []string                           `json:"productTypeExclusion"`
	PromotionDestinationIds      []string                           `json:"promotionDestinationIds"`
	PromotionDisplayDates        *string                            `json:"promotionDisplayDates"`
	PromotionDisplayTimePeriod   *TimePeriod                        `json:"promotionDisplayTimePeriod"`
	PromotionEffectiveDates      *string                            `json:"promotionEffectiveDates"`
	PromotionEffectiveTimePeriod *TimePeriod                        `json:"promotionEffectiveTimePeriod"`
	PromotionID                  *string                            `json:"promotionId"`
	RedemptionChannel            []PromotionRedemptionChannelEnum   `json:"redemptionChannel"`
	ShippingServiceNames         []string                           `json:"shippingServiceNames"`
	TargetCountry                *string                            `json:"targetCountry"`
}
