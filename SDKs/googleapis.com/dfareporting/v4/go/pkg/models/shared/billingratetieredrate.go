package shared

type BillingRateTieredRate struct {
	HighValue    *string `json:"highValue"`
	LowValue     *string `json:"lowValue"`
	RateInMicros *string `json:"rateInMicros"`
}
