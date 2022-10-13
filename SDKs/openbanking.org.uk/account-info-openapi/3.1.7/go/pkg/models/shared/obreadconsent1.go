package shared

import (
	"time"
)

type ObReadConsent1DataPermissionsEnum string

const (
	ObReadConsent1DataPermissionsEnumReadAccountsBasic           ObReadConsent1DataPermissionsEnum = "ReadAccountsBasic"
	ObReadConsent1DataPermissionsEnumReadAccountsDetail          ObReadConsent1DataPermissionsEnum = "ReadAccountsDetail"
	ObReadConsent1DataPermissionsEnumReadBalances                ObReadConsent1DataPermissionsEnum = "ReadBalances"
	ObReadConsent1DataPermissionsEnumReadBeneficiariesBasic      ObReadConsent1DataPermissionsEnum = "ReadBeneficiariesBasic"
	ObReadConsent1DataPermissionsEnumReadBeneficiariesDetail     ObReadConsent1DataPermissionsEnum = "ReadBeneficiariesDetail"
	ObReadConsent1DataPermissionsEnumReadDirectDebits            ObReadConsent1DataPermissionsEnum = "ReadDirectDebits"
	ObReadConsent1DataPermissionsEnumReadOffers                  ObReadConsent1DataPermissionsEnum = "ReadOffers"
	ObReadConsent1DataPermissionsEnumReadPan                     ObReadConsent1DataPermissionsEnum = "ReadPAN"
	ObReadConsent1DataPermissionsEnumReadParty                   ObReadConsent1DataPermissionsEnum = "ReadParty"
	ObReadConsent1DataPermissionsEnumReadPartyPsu                ObReadConsent1DataPermissionsEnum = "ReadPartyPSU"
	ObReadConsent1DataPermissionsEnumReadProducts                ObReadConsent1DataPermissionsEnum = "ReadProducts"
	ObReadConsent1DataPermissionsEnumReadScheduledPaymentsBasic  ObReadConsent1DataPermissionsEnum = "ReadScheduledPaymentsBasic"
	ObReadConsent1DataPermissionsEnumReadScheduledPaymentsDetail ObReadConsent1DataPermissionsEnum = "ReadScheduledPaymentsDetail"
	ObReadConsent1DataPermissionsEnumReadStandingOrdersBasic     ObReadConsent1DataPermissionsEnum = "ReadStandingOrdersBasic"
	ObReadConsent1DataPermissionsEnumReadStandingOrdersDetail    ObReadConsent1DataPermissionsEnum = "ReadStandingOrdersDetail"
	ObReadConsent1DataPermissionsEnumReadStatementsBasic         ObReadConsent1DataPermissionsEnum = "ReadStatementsBasic"
	ObReadConsent1DataPermissionsEnumReadStatementsDetail        ObReadConsent1DataPermissionsEnum = "ReadStatementsDetail"
	ObReadConsent1DataPermissionsEnumReadTransactionsBasic       ObReadConsent1DataPermissionsEnum = "ReadTransactionsBasic"
	ObReadConsent1DataPermissionsEnumReadTransactionsCredits     ObReadConsent1DataPermissionsEnum = "ReadTransactionsCredits"
	ObReadConsent1DataPermissionsEnumReadTransactionsDebits      ObReadConsent1DataPermissionsEnum = "ReadTransactionsDebits"
	ObReadConsent1DataPermissionsEnumReadTransactionsDetail      ObReadConsent1DataPermissionsEnum = "ReadTransactionsDetail"
)

type ObReadConsent1Data struct {
	ExpirationDateTime      *time.Time                          `json:"ExpirationDateTime"`
	Permissions             []ObReadConsent1DataPermissionsEnum `json:"Permissions"`
	TransactionFromDateTime *time.Time                          `json:"TransactionFromDateTime"`
	TransactionToDateTime   *time.Time                          `json:"TransactionToDateTime"`
}

type ObReadConsent1 struct {
	Data ObReadConsent1Data     `json:"Data"`
	Risk map[string]interface{} `json:"Risk"`
}
