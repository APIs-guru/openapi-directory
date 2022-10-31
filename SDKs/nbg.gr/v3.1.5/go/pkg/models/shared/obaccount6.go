package shared

import (
	"time"
)

type ObAccount6 struct {
	Account        []ObCashAccount5                                `json:"Account,omitempty"`
	AccountID      string                                          `json:"AccountId"`
	AccountSubType ObExternalAccountSubType1CodeEnum               `json:"AccountSubType"`
	AccountType    ObExternalAccountType1CodeEnum                  `json:"AccountType"`
	Currency       string                                          `json:"Currency"`
	Description    *string                                         `json:"Description,omitempty"`
	Nickname       *string                                         `json:"Nickname,omitempty"`
	OpeningDate    *time.Time                                      `json:"OpeningDate,omitempty"`
	Servicer       *ObBranchAndFinancialInstitutionIdentification5 `json:"Servicer,omitempty"`
}
