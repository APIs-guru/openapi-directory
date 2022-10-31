package shared

import (
"time")

type ObStandingOrder6 struct {
    AccountID string `json:"AccountId"`
    CreditorAccount *ObCashAccount51 `json:"CreditorAccount,omitempty"`
    CreditorAgent *ObBranchAndFinancialInstitutionIdentification51 `json:"CreditorAgent,omitempty"`
    FinalPaymentAmount *ObActiveOrHistoricCurrencyAndAmount4 `json:"FinalPaymentAmount,omitempty"`
    FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
    FirstPaymentAmount *ObActiveOrHistoricCurrencyAndAmount2 `json:"FirstPaymentAmount,omitempty"`
    FirstPaymentDateTime *time.Time `json:"FirstPaymentDateTime,omitempty"`
    Frequency string `json:"Frequency"`
    LastPaymentAmount *ObActiveOrHistoricCurrencyAndAmount11 `json:"LastPaymentAmount,omitempty"`
    LastPaymentDateTime *time.Time `json:"LastPaymentDateTime,omitempty"`
    NextPaymentAmount *ObActiveOrHistoricCurrencyAndAmount3 `json:"NextPaymentAmount,omitempty"`
    NextPaymentDateTime *time.Time `json:"NextPaymentDateTime,omitempty"`
    NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    StandingOrderID *string `json:"StandingOrderId,omitempty"`
    StandingOrderStatusCode *ObExternalStandingOrderStatus1CodeEnum `json:"StandingOrderStatusCode,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}

