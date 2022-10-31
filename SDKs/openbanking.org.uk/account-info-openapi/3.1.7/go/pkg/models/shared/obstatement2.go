package shared

import (
	"time"
)

type ObStatement2StatementAmount struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount8 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Type                 string                               `json:"Type"`
}

type ObStatement2StatementBenefit struct {
	Amount ObActiveOrHistoricCurrencyAndAmount5 `json:"Amount"`
	Type   string                               `json:"Type"`
}

type ObStatement2StatementDateTime struct {
	DateTime time.Time `json:"DateTime"`
	Type     string    `json:"Type"`
}

type ObStatement2StatementFee struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount6 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Description          *string                              `json:"Description,omitempty"`
	Frequency            *string                              `json:"Frequency,omitempty"`
	Rate                 *float64                             `json:"Rate,omitempty"`
	RateType             *string                              `json:"RateType,omitempty"`
	Type                 string                               `json:"Type"`
}

type ObStatement2StatementInterest struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount7 `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode0Enum               `json:"CreditDebitIndicator"`
	Description          *string                              `json:"Description,omitempty"`
	Frequency            *string                              `json:"Frequency,omitempty"`
	Rate                 *float64                             `json:"Rate,omitempty"`
	RateType             *string                              `json:"RateType,omitempty"`
	Type                 string                               `json:"Type"`
}

type ObStatement2StatementRate struct {
	Rate string `json:"Rate"`
	Type string `json:"Type"`
}

type ObStatement2StatementValue struct {
	Type  string `json:"Type"`
	Value string `json:"Value"`
}

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
