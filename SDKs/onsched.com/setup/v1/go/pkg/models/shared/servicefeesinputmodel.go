package shared

type ServiceFeesInputModel struct {
	CancellationFeeAmount  *float64 `json:"cancellationFeeAmount"`
	CancellationFeeTaxable *bool    `json:"cancellationFeeTaxable"`
	FeeAmount              *float64 `json:"feeAmount"`
	FeeTaxable             *bool    `json:"feeTaxable"`
	NonRefundable          *bool    `json:"nonRefundable"`
}
