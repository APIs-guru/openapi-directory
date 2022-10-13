package shared

import (
	"time"
)

type ObStandingOrder5 struct {
	AccountID               string                                  `json:"AccountId"`
	CreditorAccount         *ObCashAccount5                         `json:"CreditorAccount"`
	FinalPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount    `json:"FinalPaymentAmount"`
	FinalPaymentDateTime    *time.Time                              `json:"FinalPaymentDateTime"`
	FirstPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount    `json:"FirstPaymentAmount"`
	FirstPaymentDateTime    *time.Time                              `json:"FirstPaymentDateTime"`
	Frequency               string                                  `json:"Frequency"`
	LastPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount    `json:"LastPaymentAmount"`
	LastPaymentDateTime     *time.Time                              `json:"LastPaymentDateTime"`
	NextPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount    `json:"NextPaymentAmount"`
	NextPaymentDateTime     *time.Time                              `json:"NextPaymentDateTime"`
	Reference               *string                                 `json:"Reference"`
	StandingOrderID         *string                                 `json:"StandingOrderId"`
	StandingOrderStatusCode *ObExternalStandingOrderStatus1CodeEnum `json:"StandingOrderStatusCode"`
}
