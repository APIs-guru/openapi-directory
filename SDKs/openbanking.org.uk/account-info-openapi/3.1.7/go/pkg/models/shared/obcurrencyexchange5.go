package shared

import (
	"time"
)

// ObCurrencyExchange5InstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
type ObCurrencyExchange5InstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObCurrencyExchange5
// Set of elements used to provide details on the currency exchange.
type ObCurrencyExchange5 struct {
	ContractIdentification *string                              `json:"ContractIdentification,omitempty"`
	ExchangeRate           float64                              `json:"ExchangeRate"`
	InstructedAmount       *ObCurrencyExchange5InstructedAmount `json:"InstructedAmount,omitempty"`
	QuotationDate          *time.Time                           `json:"QuotationDate,omitempty"`
	SourceCurrency         string                               `json:"SourceCurrency"`
	TargetCurrency         *string                              `json:"TargetCurrency,omitempty"`
	UnitCurrency           *string                              `json:"UnitCurrency,omitempty"`
}
