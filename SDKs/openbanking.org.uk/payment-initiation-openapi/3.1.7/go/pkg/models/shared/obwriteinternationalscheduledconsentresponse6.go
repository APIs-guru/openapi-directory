package shared

import (
"time")


type ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnumAny ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Any"
ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Single"
)


type ObWriteInternationalScheduledConsentResponse6DataAuthorisation struct {
    AuthorisationType ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
    CompletionDateTime *time.Time `json:"CompletionDateTime,omitempty"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataCharges struct {
    Amount ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
    ChargeBearer ObChargeBearerType1CodeEnum `json:"ChargeBearer"`
    Type string `json:"Type"`
    
}


type ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnumActual ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum = "Actual"
ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnumAgreed ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum = "Agreed"
ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum = "Indicative"
)


type ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation struct {
    ContractIdentification *string `json:"ContractIdentification,omitempty"`
    ExchangeRate float64 `json:"ExchangeRate"`
    ExpirationDateTime *time.Time `json:"ExpirationDateTime,omitempty"`
    RateType ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum `json:"RateType"`
    UnitCurrency string `json:"UnitCurrency"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor struct {
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent struct {
    Identification *string `json:"Identification,omitempty"`
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    SchemeName *string `json:"SchemeName,omitempty"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}


type ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumActual ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumAgreed ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)


type ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation struct {
    ContractIdentification *string `json:"ContractIdentification,omitempty"`
    ExchangeRate *float64 `json:"ExchangeRate,omitempty"`
    RateType ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
    UnitCurrency string `json:"UnitCurrency"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}


type ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum = "Normal"
ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum = "Urgent"
)


type ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation struct {
    Reference *string `json:"Reference,omitempty"`
    Unstructured *string `json:"Unstructured,omitempty"`
    
}

type ObWriteInternationalScheduledConsentResponse6DataInitiation struct {
    ChargeBearer *ObChargeBearerType1CodeEnum `json:"ChargeBearer,omitempty"`
    Creditor *ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor `json:"Creditor,omitempty"`
    CreditorAccount ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount `json:"CreditorAccount"`
    CreditorAgent *ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent `json:"CreditorAgent,omitempty"`
    CurrencyOfTransfer string `json:"CurrencyOfTransfer"`
    DebtorAccount *ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    DestinationCountryCode *string `json:"DestinationCountryCode,omitempty"`
    EndToEndIdentification *string `json:"EndToEndIdentification,omitempty"`
    ExchangeRateInformation *ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
    ExtendedPurpose *string `json:"ExtendedPurpose,omitempty"`
    InstructedAmount ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount `json:"InstructedAmount"`
    InstructionIdentification string `json:"InstructionIdentification"`
    InstructionPriority *ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
    LocalInstrument *string `json:"LocalInstrument,omitempty"`
    Purpose *string `json:"Purpose,omitempty"`
    RemittanceInformation *ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
    RequestedExecutionDateTime time.Time `json:"RequestedExecutionDateTime"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}


type ObWriteInternationalScheduledConsentResponse6DataPermissionEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataPermissionEnumCreate ObWriteInternationalScheduledConsentResponse6DataPermissionEnum = "Create"
)



type ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnumNo ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum = "No"
ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnumYes ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum = "Yes"
)



type ObWriteInternationalScheduledConsentResponse6DataStatusEnum string

const (
    ObWriteInternationalScheduledConsentResponse6DataStatusEnumAuthorised ObWriteInternationalScheduledConsentResponse6DataStatusEnum = "Authorised"
ObWriteInternationalScheduledConsentResponse6DataStatusEnumAwaitingAuthorisation ObWriteInternationalScheduledConsentResponse6DataStatusEnum = "AwaitingAuthorisation"
ObWriteInternationalScheduledConsentResponse6DataStatusEnumConsumed ObWriteInternationalScheduledConsentResponse6DataStatusEnum = "Consumed"
ObWriteInternationalScheduledConsentResponse6DataStatusEnumRejected ObWriteInternationalScheduledConsentResponse6DataStatusEnum = "Rejected"
)


type ObWriteInternationalScheduledConsentResponse6Data struct {
    Authorisation *ObWriteInternationalScheduledConsentResponse6DataAuthorisation `json:"Authorisation,omitempty"`
    Charges []ObWriteInternationalScheduledConsentResponse6DataCharges `json:"Charges,omitempty"`
    ConsentID string `json:"ConsentId"`
    CreationDateTime time.Time `json:"CreationDateTime"`
    CutOffDateTime *time.Time `json:"CutOffDateTime,omitempty"`
    Debtor *ObCashAccountDebtor4 `json:"Debtor,omitempty"`
    ExchangeRateInformation *ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
    ExpectedExecutionDateTime *time.Time `json:"ExpectedExecutionDateTime,omitempty"`
    ExpectedSettlementDateTime *time.Time `json:"ExpectedSettlementDateTime,omitempty"`
    Initiation ObWriteInternationalScheduledConsentResponse6DataInitiation `json:"Initiation"`
    Permission ObWriteInternationalScheduledConsentResponse6DataPermissionEnum `json:"Permission"`
    ReadRefundAccount *ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
    ScaSupportData *ObscaSupportData1 `json:"SCASupportData,omitempty"`
    Status ObWriteInternationalScheduledConsentResponse6DataStatusEnum `json:"Status"`
    StatusUpdateDateTime time.Time `json:"StatusUpdateDateTime"`
    
}

type ObWriteInternationalScheduledConsentResponse6 struct {
    Data ObWriteInternationalScheduledConsentResponse6Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    Risk ObRisk1 `json:"Risk"`
    
}

