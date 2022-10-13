package shared

import (
	"time"
)

type ObAccount6 struct {
	Account        []ObCashAccount5                                `json:"Account"`
	AccountID      string                                          `json:"AccountId"`
	AccountSubType ObExternalAccountSubType1CodeEnum               `json:"AccountSubType"`
	AccountType    ObExternalAccountType1CodeEnum                  `json:"AccountType"`
	Currency       string                                          `json:"Currency"`
	Description    *string                                         `json:"Description"`
	Nickname       *string                                         `json:"Nickname"`
	OpeningDate    *time.Time                                      `json:"OpeningDate"`
	Servicer       *ObBranchAndFinancialInstitutionIdentification5 `json:"Servicer"`
}
