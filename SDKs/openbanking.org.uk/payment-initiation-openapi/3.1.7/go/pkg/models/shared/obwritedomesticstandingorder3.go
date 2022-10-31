package shared

import (
"time")

type ObWriteDomesticStandingOrder3DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteDomesticStandingOrder3DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrder3DataInitiation struct {
    CreditorAccount ObWriteDomesticStandingOrder3DataInitiationCreditorAccount `json:"CreditorAccount"`
    DebtorAccount *ObWriteDomesticStandingOrder3DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    FinalPaymentAmount *ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount `json:"FinalPaymentAmount,omitempty"`
    FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
    FirstPaymentAmount ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount `json:"FirstPaymentAmount"`
    FirstPaymentDateTime time.Time `json:"FirstPaymentDateTime"`
    Frequency string `json:"Frequency"`
    NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
    RecurringPaymentAmount *ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount,omitempty"`
    RecurringPaymentDateTime *time.Time `json:"RecurringPaymentDateTime,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}

type ObWriteDomesticStandingOrder3Data struct {
    ConsentID string `json:"ConsentId"`
    Initiation ObWriteDomesticStandingOrder3DataInitiation `json:"Initiation"`
    
}

type ObWriteDomesticStandingOrder3 struct {
    Data ObWriteDomesticStandingOrder3Data `json:"Data"`
    Risk ObRisk1 `json:"Risk"`
    
}

