package shared



type ServiceFeesInputModel struct {
    CancellationFeeAmount *float64 `json:"cancellationFeeAmount,omitempty"`
    CancellationFeeTaxable *bool `json:"cancellationFeeTaxable,omitempty"`
    FeeAmount *float64 `json:"feeAmount,omitempty"`
    FeeTaxable *bool `json:"feeTaxable,omitempty"`
    NonRefundable *bool `json:"nonRefundable,omitempty"`
    
}

