package shared

type UpdatePsuIdenticationResponse struct {
	Links                              map[string]HrefType    `json:"_links"`
	CurrencyConversionFees             *Amount                `json:"currencyConversionFees"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount"`
	PsuMessage                         *string                `json:"psuMessage"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods"`
	ScaStatus                          ScaStatusEnum          `json:"scaStatus"`
	TransactionFees                    *Amount                `json:"transactionFees"`
}
