package shared

type LocalPostOffer struct {
	CouponCode      *string `json:"couponCode"`
	RedeemOnlineURL *string `json:"redeemOnlineUrl"`
	TermsConditions *string `json:"termsConditions"`
}
