package shared

import (
	"time"
)

// ObReadBalance1DataBalanceAmount
// Amount of money of the cash balance.
type ObReadBalance1DataBalanceAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObReadBalance1DataBalanceCreditLineAmount
// Amount of money of the credit line.
type ObReadBalance1DataBalanceCreditLineAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObReadBalance1DataBalanceCreditLineTypeEnum string

const (
	ObReadBalance1DataBalanceCreditLineTypeEnumAvailable ObReadBalance1DataBalanceCreditLineTypeEnum = "Available"
	ObReadBalance1DataBalanceCreditLineTypeEnumCredit    ObReadBalance1DataBalanceCreditLineTypeEnum = "Credit"
	ObReadBalance1DataBalanceCreditLineTypeEnumEmergency ObReadBalance1DataBalanceCreditLineTypeEnum = "Emergency"
	ObReadBalance1DataBalanceCreditLineTypeEnumPreAgreed ObReadBalance1DataBalanceCreditLineTypeEnum = "Pre-Agreed"
	ObReadBalance1DataBalanceCreditLineTypeEnumTemporary ObReadBalance1DataBalanceCreditLineTypeEnum = "Temporary"
)

// ObReadBalance1DataBalanceCreditLine
// Set of elements used to provide details on the credit line.
type ObReadBalance1DataBalanceCreditLine struct {
	Amount   *ObReadBalance1DataBalanceCreditLineAmount   `json:"Amount,omitempty"`
	Included bool                                         `json:"Included"`
	Type     *ObReadBalance1DataBalanceCreditLineTypeEnum `json:"Type,omitempty"`
}

// ObReadBalance1DataBalance
// Set of elements used to define the balance details.
type ObReadBalance1DataBalance struct {
	AccountID            string                                `json:"AccountId"`
	Amount               ObReadBalance1DataBalanceAmount       `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode2Enum                `json:"CreditDebitIndicator"`
	CreditLine           []ObReadBalance1DataBalanceCreditLine `json:"CreditLine,omitempty"`
	DateTime             time.Time                             `json:"DateTime"`
	Type                 ObBalanceType1CodeEnum                `json:"Type"`
}

type ObReadBalance1Data struct {
	Balance []ObReadBalance1DataBalance `json:"Balance"`
}

type ObReadBalance1 struct {
	Data  ObReadBalance1Data `json:"Data"`
	Links *Links             `json:"Links,omitempty"`
	Meta  *Meta              `json:"Meta,omitempty"`
}
