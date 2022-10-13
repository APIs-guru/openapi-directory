package shared

import (
	"time"
)

type ReportExchangeRate struct {
	ContractIdentification *string   `json:"contractIdentification"`
	ExchangeRate           string    `json:"exchangeRate"`
	QuotationDate          time.Time `json:"quotationDate"`
	SourceCurrency         string    `json:"sourceCurrency"`
	TargetCurrency         string    `json:"targetCurrency"`
	UnitCurrency           string    `json:"unitCurrency"`
}
