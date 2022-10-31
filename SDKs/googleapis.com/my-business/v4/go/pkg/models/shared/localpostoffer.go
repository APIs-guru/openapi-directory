package shared



type LocalPostOffer struct {
    CouponCode *string `json:"couponCode,omitempty"`
    RedeemOnlineURL *string `json:"redeemOnlineUrl,omitempty"`
    TermsConditions *string `json:"termsConditions,omitempty"`
    
}

