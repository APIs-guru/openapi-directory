package shared

import (
	"time"
)

type ObStandingOrder5 struct {
	AccountID               string                                  `json:"AccountId"`
	CreditorAccount         *ObCashAccount5                         `json:"CreditorAccount,omitempty"`
	FinalPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount    `json:"FinalPaymentAmount,omitempty"`
	FinalPaymentDateTime    *time.Time                              `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount    `json:"FirstPaymentAmount,omitempty"`
	FirstPaymentDateTime    *time.Time                              `json:"FirstPaymentDateTime,omitempty"`
	Frequency               string                                  `json:"Frequency"`
	LastPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount    `json:"LastPaymentAmount,omitempty"`
	LastPaymentDateTime     *time.Time                              `json:"LastPaymentDateTime,omitempty"`
	NextPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount    `json:"NextPaymentAmount,omitempty"`
	NextPaymentDateTime     *time.Time                              `json:"NextPaymentDateTime,omitempty"`
	Reference               *string                                 `json:"Reference,omitempty"`
	StandingOrderID         *string                                 `json:"StandingOrderId,omitempty"`
	StandingOrderStatusCode *ObExternalStandingOrderStatus1CodeEnum `json:"StandingOrderStatusCode,omitempty"`
}
