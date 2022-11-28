package shared

// LocalPostOffer
// Specific fields for offer posts.
type LocalPostOffer struct {
	CouponCode      *string `json:"couponCode,omitempty"`
	RedeemOnlineURL *string `json:"redeemOnlineUrl,omitempty"`
	TermsConditions *string `json:"termsConditions,omitempty"`
}
