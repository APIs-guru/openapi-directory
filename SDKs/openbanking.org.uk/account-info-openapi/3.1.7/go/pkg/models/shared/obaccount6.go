package shared

import (
"time")

type ObAccount6Account struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObAccount6 struct {
    Account []ObAccount6Account `json:"Account,omitempty"`
    AccountID string `json:"AccountId"`
    AccountSubType *ObExternalAccountSubType1CodeEnum `json:"AccountSubType,omitempty"`
    AccountType *ObExternalAccountType1CodeEnum `json:"AccountType,omitempty"`
    Currency *string `json:"Currency,omitempty"`
    Description *string `json:"Description,omitempty"`
    MaturityDate *time.Time `json:"MaturityDate,omitempty"`
    Nickname *string `json:"Nickname,omitempty"`
    OpeningDate *time.Time `json:"OpeningDate,omitempty"`
    Servicer *ObBranchAndFinancialInstitutionIdentification50 `json:"Servicer,omitempty"`
    Status *ObAccountStatus1CodeEnum `json:"Status,omitempty"`
    StatusUpdateDateTime *time.Time `json:"StatusUpdateDateTime,omitempty"`
    SwitchStatus *string `json:"SwitchStatus,omitempty"`
    
}

