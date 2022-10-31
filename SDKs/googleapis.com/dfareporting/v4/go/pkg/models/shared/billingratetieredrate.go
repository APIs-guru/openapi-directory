package shared



type BillingRateTieredRate struct {
    HighValue *string `json:"highValue,omitempty"`
    LowValue *string `json:"lowValue,omitempty"`
    RateInMicros *string `json:"rateInMicros,omitempty"`
    
}

