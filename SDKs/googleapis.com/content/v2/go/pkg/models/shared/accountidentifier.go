package shared

type AccountIdentifier struct {
	AggregatorID *string `json:"aggregatorId"`
	MerchantID   *string `json:"merchantId"`
}
