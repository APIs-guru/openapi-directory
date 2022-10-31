package shared

type AccountIdentifier struct {
	AggregatorID *string `json:"aggregatorId,omitempty"`
	MerchantID   *string `json:"merchantId,omitempty"`
}
