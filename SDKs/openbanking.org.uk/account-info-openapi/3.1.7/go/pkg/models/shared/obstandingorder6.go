package shared

import (
	"time"
)

type ObStandingOrder6 struct {
	AccountID               string                                           `json:"AccountId"`
	CreditorAccount         *ObCashAccount51                                 `json:"CreditorAccount"`
	CreditorAgent           *ObBranchAndFinancialInstitutionIdentification51 `json:"CreditorAgent"`
	FinalPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount4            `json:"FinalPaymentAmount"`
	FinalPaymentDateTime    *time.Time                                       `json:"FinalPaymentDateTime"`
	FirstPaymentAmount      *ObActiveOrHistoricCurrencyAndAmount2            `json:"FirstPaymentAmount"`
	FirstPaymentDateTime    *time.Time                                       `json:"FirstPaymentDateTime"`
	Frequency               string                                           `json:"Frequency"`
	LastPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount11           `json:"LastPaymentAmount"`
	LastPaymentDateTime     *time.Time                                       `json:"LastPaymentDateTime"`
	NextPaymentAmount       *ObActiveOrHistoricCurrencyAndAmount3            `json:"NextPaymentAmount"`
	NextPaymentDateTime     *time.Time                                       `json:"NextPaymentDateTime"`
	NumberOfPayments        *string                                          `json:"NumberOfPayments"`
	Reference               *string                                          `json:"Reference"`
	StandingOrderID         *string                                          `json:"StandingOrderId"`
	StandingOrderStatusCode *ObExternalStandingOrderStatus1CodeEnum          `json:"StandingOrderStatusCode"`
	SupplementaryData       map[string]interface{}                           `json:"SupplementaryData"`
}
