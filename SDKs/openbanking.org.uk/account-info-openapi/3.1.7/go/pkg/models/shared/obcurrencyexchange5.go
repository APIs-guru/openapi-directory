package shared

import (
	"time"
)

type ObCurrencyExchange5InstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObCurrencyExchange5 struct {
	ContractIdentification *string                              `json:"ContractIdentification"`
	ExchangeRate           float64                              `json:"ExchangeRate"`
	InstructedAmount       *ObCurrencyExchange5InstructedAmount `json:"InstructedAmount"`
	QuotationDate          *time.Time                           `json:"QuotationDate"`
	SourceCurrency         string                               `json:"SourceCurrency"`
	TargetCurrency         *string                              `json:"TargetCurrency"`
	UnitCurrency           *string                              `json:"UnitCurrency"`
}
