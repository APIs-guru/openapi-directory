package shared

import (
"time")


type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum string

const (
    ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumAny ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Any"
ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Single"
)


type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation struct {
    AuthorisationType ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
    CompletionDateTime *time.Time `json:"CompletionDateTime,omitempty"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataCharges struct {
    Amount ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
    ChargeBearer ObChargeBearerType1CodeEnum `json:"ChargeBearer"`
    Type string `json:"Type"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor struct {
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent struct {
    Identification *string `json:"Identification,omitempty"`
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    SchemeName *string `json:"SchemeName,omitempty"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiation struct {
    ChargeBearer *ObChargeBearerType1CodeEnum `json:"ChargeBearer,omitempty"`
    Creditor *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor `json:"Creditor,omitempty"`
    CreditorAccount ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount `json:"CreditorAccount"`
    CreditorAgent *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent `json:"CreditorAgent,omitempty"`
    CurrencyOfTransfer string `json:"CurrencyOfTransfer"`
    DebtorAccount *ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    DestinationCountryCode *string `json:"DestinationCountryCode,omitempty"`
    ExtendedPurpose *string `json:"ExtendedPurpose,omitempty"`
    FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
    FirstPaymentDateTime time.Time `json:"FirstPaymentDateTime"`
    Frequency string `json:"Frequency"`
    InstructedAmount ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount `json:"InstructedAmount"`
    NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
    Purpose *string `json:"Purpose,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}


type ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum string

const (
    ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnumCreate ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum = "Create"
)



type ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum string

const (
    ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnumNo ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum = "No"
ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnumYes ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum = "Yes"
)



type ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum string

const (
    ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumAuthorised ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Authorised"
ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumAwaitingAuthorisation ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "AwaitingAuthorisation"
ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumConsumed ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Consumed"
ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumRejected ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Rejected"
)


type ObWriteInternationalStandingOrderConsentResponse7Data struct {
    Authorisation *ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation `json:"Authorisation,omitempty"`
    Charges []ObWriteInternationalStandingOrderConsentResponse7DataCharges `json:"Charges,omitempty"`
    ConsentID string `json:"ConsentId"`
    CreationDateTime time.Time `json:"CreationDateTime"`
    CutOffDateTime *time.Time `json:"CutOffDateTime,omitempty"`
    Debtor *ObCashAccountDebtor4 `json:"Debtor,omitempty"`
    Initiation ObWriteInternationalStandingOrderConsentResponse7DataInitiation `json:"Initiation"`
    Permission ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum `json:"Permission"`
    ReadRefundAccount *ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
    ScaSupportData *ObscaSupportData1 `json:"SCASupportData,omitempty"`
    Status ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum `json:"Status"`
    StatusUpdateDateTime time.Time `json:"StatusUpdateDateTime"`
    
}

type ObWriteInternationalStandingOrderConsentResponse7 struct {
    Data ObWriteInternationalStandingOrderConsentResponse7Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    Risk ObRisk1 `json:"Risk"`
    
}

