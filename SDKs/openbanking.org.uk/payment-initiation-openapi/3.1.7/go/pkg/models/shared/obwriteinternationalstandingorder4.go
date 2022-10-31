package shared

import (
"time")

type ObWriteInternationalStandingOrder4DataInitiationCreditor struct {
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    
}

type ObWriteInternationalStandingOrder4DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternationalStandingOrder4DataInitiationCreditorAgent struct {
    Identification *string `json:"Identification,omitempty"`
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    SchemeName *string `json:"SchemeName,omitempty"`
    
}

type ObWriteInternationalStandingOrder4DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternationalStandingOrder4DataInitiationInstructedAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteInternationalStandingOrder4DataInitiation struct {
    ChargeBearer *ObChargeBearerType1CodeEnum `json:"ChargeBearer,omitempty"`
    Creditor *ObWriteInternationalStandingOrder4DataInitiationCreditor `json:"Creditor,omitempty"`
    CreditorAccount ObWriteInternationalStandingOrder4DataInitiationCreditorAccount `json:"CreditorAccount"`
    CreditorAgent *ObWriteInternationalStandingOrder4DataInitiationCreditorAgent `json:"CreditorAgent,omitempty"`
    CurrencyOfTransfer string `json:"CurrencyOfTransfer"`
    DebtorAccount *ObWriteInternationalStandingOrder4DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    DestinationCountryCode *string `json:"DestinationCountryCode,omitempty"`
    ExtendedPurpose *string `json:"ExtendedPurpose,omitempty"`
    FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
    FirstPaymentDateTime time.Time `json:"FirstPaymentDateTime"`
    Frequency string `json:"Frequency"`
    InstructedAmount ObWriteInternationalStandingOrder4DataInitiationInstructedAmount `json:"InstructedAmount"`
    NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
    Purpose *string `json:"Purpose,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}

type ObWriteInternationalStandingOrder4Data struct {
    ConsentID string `json:"ConsentId"`
    Initiation ObWriteInternationalStandingOrder4DataInitiation `json:"Initiation"`
    
}

type ObWriteInternationalStandingOrder4 struct {
    Data ObWriteInternationalStandingOrder4Data `json:"Data"`
    Risk ObRisk1 `json:"Risk"`
    
}

