package shared

import (
	"time"
)

type ObCurrencyExchange5InstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObCurrencyExchange5 struct {
	ContractIdentification *string                              `json:"ContractIdentification,omitempty"`
	ExchangeRate           float64                              `json:"ExchangeRate"`
	InstructedAmount       *ObCurrencyExchange5InstructedAmount `json:"InstructedAmount,omitempty"`
	QuotationDate          *time.Time                           `json:"QuotationDate,omitempty"`
	SourceCurrency         string                               `json:"SourceCurrency"`
	TargetCurrency         *string                              `json:"TargetCurrency,omitempty"`
	UnitCurrency           *string                              `json:"UnitCurrency,omitempty"`
}
