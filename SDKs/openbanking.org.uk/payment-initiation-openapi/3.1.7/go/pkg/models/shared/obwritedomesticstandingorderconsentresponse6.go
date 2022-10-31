package shared

import (
"time")


type ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum string

const (
    ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnumAny ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Any"
ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Single"
)


type ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation struct {
    AuthorisationType ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
    CompletionDateTime *time.Time `json:"CompletionDateTime,omitempty"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataCharges struct {
    Amount ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
    ChargeBearer ObChargeBearerType1CodeEnum `json:"ChargeBearer"`
    Type string `json:"Type"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6DataInitiation struct {
    CreditorAccount ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount `json:"CreditorAccount"`
    DebtorAccount *ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    FinalPaymentAmount *ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount `json:"FinalPaymentAmount,omitempty"`
    FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
    FirstPaymentAmount ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount `json:"FirstPaymentAmount"`
    FirstPaymentDateTime time.Time `json:"FirstPaymentDateTime"`
    Frequency string `json:"Frequency"`
    NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
    RecurringPaymentAmount *ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount,omitempty"`
    RecurringPaymentDateTime *time.Time `json:"RecurringPaymentDateTime,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}


type ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum string

const (
    ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnumCreate ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum = "Create"
)



type ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum string

const (
    ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnumNo ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum = "No"
ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnumYes ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum = "Yes"
)



type ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum string

const (
    ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumAuthorised ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Authorised"
ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumAwaitingAuthorisation ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "AwaitingAuthorisation"
ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumConsumed ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Consumed"
ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumRejected ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Rejected"
)


type ObWriteDomesticStandingOrderConsentResponse6Data struct {
    Authorisation *ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation `json:"Authorisation,omitempty"`
    Charges []ObWriteDomesticStandingOrderConsentResponse6DataCharges `json:"Charges,omitempty"`
    ConsentID string `json:"ConsentId"`
    CreationDateTime time.Time `json:"CreationDateTime"`
    CutOffDateTime *time.Time `json:"CutOffDateTime,omitempty"`
    Debtor *ObCashAccountDebtor4 `json:"Debtor,omitempty"`
    Initiation ObWriteDomesticStandingOrderConsentResponse6DataInitiation `json:"Initiation"`
    Permission ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum `json:"Permission"`
    ReadRefundAccount *ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
    ScaSupportData *ObscaSupportData1 `json:"SCASupportData,omitempty"`
    Status ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum `json:"Status"`
    StatusUpdateDateTime time.Time `json:"StatusUpdateDateTime"`
    
}

type ObWriteDomesticStandingOrderConsentResponse6 struct {
    Data ObWriteDomesticStandingOrderConsentResponse6Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    Risk ObRisk1 `json:"Risk"`
    
}

