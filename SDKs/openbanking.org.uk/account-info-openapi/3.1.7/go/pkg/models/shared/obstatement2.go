package shared

import (
	"time"
)

// ObStatement2StatementAmount
// Set of elements used to provide details of a generic amount for the statement resource.
type ObStatement2StatementAmount struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount8 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Type                 string                               `json:"Type"`
}

// ObStatement2StatementBenefit
// Set of elements used to provide details of a benefit or reward amount for the statement resource.
type ObStatement2StatementBenefit struct {
	Amount ObActiveOrHistoricCurrencyAndAmount5 `json:"Amount"`
	Type   string                               `json:"Type"`
}

// ObStatement2StatementDateTime
// Set of elements used to provide details of a generic date time for the statement resource.
type ObStatement2StatementDateTime struct {
	DateTime time.Time `json:"DateTime"`
	Type     string    `json:"Type"`
}

// ObStatement2StatementFee
// Set of elements used to provide details of a fee for the statement resource.
type ObStatement2StatementFee struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount6 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Description          *string                              `json:"Description,omitempty"`
	Frequency            *string                              `json:"Frequency,omitempty"`
	Rate                 *float64                             `json:"Rate,omitempty"`
	RateType             *string                              `json:"RateType,omitempty"`
	Type                 string                               `json:"Type"`
}

// ObStatement2StatementInterest
// Set of elements used to provide details of a generic interest amount related to the statement resource.
type ObStatement2StatementInterest struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount7 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Description          *string                              `json:"Description,omitempty"`
	Frequency            *string                              `json:"Frequency,omitempty"`
	Rate                 *float64                             `json:"Rate,omitempty"`
	RateType             *string                              `json:"RateType,omitempty"`
	Type                 string                               `json:"Type"`
}

// ObStatement2StatementRate
// Set of elements used to provide details of a generic rate related to the statement resource.
type ObStatement2StatementRate struct {
	Rate string `json:"Rate"`
	Type string `json:"Type"`
}

// ObStatement2StatementValue
// Set of elements used to provide details of a generic number value related to the statement resource.
type ObStatement2StatementValue struct {
	Type  string `json:"Type"`
	Value string `json:"Value"`
}

// ObStatement2
// Provides further details on a statement resource.
type ObStatement2 struct {
	AccountID            string                           `json:"AccountId"`
	CreationDateTime     time.Time                        `json:"CreationDateTime"`
	EndDateTime          time.Time                        `json:"EndDateTime"`
	StartDateTime        time.Time                        `json:"StartDateTime"`
	StatementAmount      []ObStatement2StatementAmount    `json:"StatementAmount,omitempty"`
	StatementBenefit     []ObStatement2StatementBenefit   `json:"StatementBenefit,omitempty"`
	StatementDateTime    []ObStatement2StatementDateTime  `json:"StatementDateTime,omitempty"`
	StatementDescription []string                         `json:"StatementDescription,omitempty"`
	StatementFee         []ObStatement2StatementFee       `json:"StatementFee,omitempty"`
	StatementID          *string                          `json:"StatementId,omitempty"`
	StatementInterest    []ObStatement2StatementInterest  `json:"StatementInterest,omitempty"`
	StatementRate        []ObStatement2StatementRate      `json:"StatementRate,omitempty"`
	StatementReference   *string                          `json:"StatementReference,omitempty"`
	StatementValue       []ObStatement2StatementValue     `json:"StatementValue,omitempty"`
	Type                 ObExternalStatementType1CodeEnum `json:"Type"`
}
