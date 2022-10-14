package shared

type UpdatePsuIdenticationResponse struct {
	Links                              map[string]HrefType    `json:"_links"`
	CurrencyConversionFees             *Amount                `json:"currencyConversionFees,omitempty"`
	EstimatedInterbankSettlementAmount *Amount                `json:"estimatedInterbankSettlementAmount,omitempty"`
	EstimatedTotalAmount               *Amount                `json:"estimatedTotalAmount,omitempty"`
	PsuMessage                         *string                `json:"psuMessage,omitempty"`
	ScaMethods                         []AuthenticationObject `json:"scaMethods,omitempty"`
	ScaStatus                          ScaStatusEnum          `json:"scaStatus"`
	TransactionFees                    *Amount                `json:"transactionFees,omitempty"`
}
