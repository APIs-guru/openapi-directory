package shared

import (
	"time"
)

type ObAccount6Account struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObAccount6 struct {
	Account              []ObAccount6Account                              `json:"Account"`
	AccountID            string                                           `json:"AccountId"`
	AccountSubType       *ObExternalAccountSubType1CodeEnum               `json:"AccountSubType"`
	AccountType          *ObExternalAccountType1CodeEnum                  `json:"AccountType"`
	Currency             *string                                          `json:"Currency"`
	Description          *string                                          `json:"Description"`
	MaturityDate         *time.Time                                       `json:"MaturityDate"`
	Nickname             *string                                          `json:"Nickname"`
	OpeningDate          *time.Time                                       `json:"OpeningDate"`
	Servicer             *ObBranchAndFinancialInstitutionIdentification50 `json:"Servicer"`
	Status               *ObAccountStatus1CodeEnum                        `json:"Status"`
	StatusUpdateDateTime *time.Time                                       `json:"StatusUpdateDateTime"`
	SwitchStatus         *string                                          `json:"SwitchStatus"`
}
