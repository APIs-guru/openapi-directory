package shared

import (
	"time"
)

type ObReadConsentResponse1DataPermissionsEnum string

const (
	ObReadConsentResponse1DataPermissionsEnumReadAccountsBasic           ObReadConsentResponse1DataPermissionsEnum = "ReadAccountsBasic"
	ObReadConsentResponse1DataPermissionsEnumReadAccountsDetail          ObReadConsentResponse1DataPermissionsEnum = "ReadAccountsDetail"
	ObReadConsentResponse1DataPermissionsEnumReadBalances                ObReadConsentResponse1DataPermissionsEnum = "ReadBalances"
	ObReadConsentResponse1DataPermissionsEnumReadBeneficiariesBasic      ObReadConsentResponse1DataPermissionsEnum = "ReadBeneficiariesBasic"
	ObReadConsentResponse1DataPermissionsEnumReadBeneficiariesDetail     ObReadConsentResponse1DataPermissionsEnum = "ReadBeneficiariesDetail"
	ObReadConsentResponse1DataPermissionsEnumReadDirectDebits            ObReadConsentResponse1DataPermissionsEnum = "ReadDirectDebits"
	ObReadConsentResponse1DataPermissionsEnumReadOffers                  ObReadConsentResponse1DataPermissionsEnum = "ReadOffers"
	ObReadConsentResponse1DataPermissionsEnumReadPan                     ObReadConsentResponse1DataPermissionsEnum = "ReadPAN"
	ObReadConsentResponse1DataPermissionsEnumReadParty                   ObReadConsentResponse1DataPermissionsEnum = "ReadParty"
	ObReadConsentResponse1DataPermissionsEnumReadPartyPsu                ObReadConsentResponse1DataPermissionsEnum = "ReadPartyPSU"
	ObReadConsentResponse1DataPermissionsEnumReadProducts                ObReadConsentResponse1DataPermissionsEnum = "ReadProducts"
	ObReadConsentResponse1DataPermissionsEnumReadScheduledPaymentsBasic  ObReadConsentResponse1DataPermissionsEnum = "ReadScheduledPaymentsBasic"
	ObReadConsentResponse1DataPermissionsEnumReadScheduledPaymentsDetail ObReadConsentResponse1DataPermissionsEnum = "ReadScheduledPaymentsDetail"
	ObReadConsentResponse1DataPermissionsEnumReadStandingOrdersBasic     ObReadConsentResponse1DataPermissionsEnum = "ReadStandingOrdersBasic"
	ObReadConsentResponse1DataPermissionsEnumReadStandingOrdersDetail    ObReadConsentResponse1DataPermissionsEnum = "ReadStandingOrdersDetail"
	ObReadConsentResponse1DataPermissionsEnumReadStatementsBasic         ObReadConsentResponse1DataPermissionsEnum = "ReadStatementsBasic"
	ObReadConsentResponse1DataPermissionsEnumReadStatementsDetail        ObReadConsentResponse1DataPermissionsEnum = "ReadStatementsDetail"
	ObReadConsentResponse1DataPermissionsEnumReadTransactionsBasic       ObReadConsentResponse1DataPermissionsEnum = "ReadTransactionsBasic"
	ObReadConsentResponse1DataPermissionsEnumReadTransactionsCredits     ObReadConsentResponse1DataPermissionsEnum = "ReadTransactionsCredits"
	ObReadConsentResponse1DataPermissionsEnumReadTransactionsDebits      ObReadConsentResponse1DataPermissionsEnum = "ReadTransactionsDebits"
	ObReadConsentResponse1DataPermissionsEnumReadTransactionsDetail      ObReadConsentResponse1DataPermissionsEnum = "ReadTransactionsDetail"
)

type ObReadConsentResponse1DataStatusEnum string

const (
	ObReadConsentResponse1DataStatusEnumAuthorised            ObReadConsentResponse1DataStatusEnum = "Authorised"
	ObReadConsentResponse1DataStatusEnumAwaitingAuthorisation ObReadConsentResponse1DataStatusEnum = "AwaitingAuthorisation"
	ObReadConsentResponse1DataStatusEnumRejected              ObReadConsentResponse1DataStatusEnum = "Rejected"
	ObReadConsentResponse1DataStatusEnumRevoked               ObReadConsentResponse1DataStatusEnum = "Revoked"
)

type ObReadConsentResponse1Data struct {
	ConsentID               string                                      `json:"ConsentId"`
	CreationDateTime        time.Time                                   `json:"CreationDateTime"`
	ExpirationDateTime      *time.Time                                  `json:"ExpirationDateTime"`
	Permissions             []ObReadConsentResponse1DataPermissionsEnum `json:"Permissions"`
	Status                  ObReadConsentResponse1DataStatusEnum        `json:"Status"`
	StatusUpdateDateTime    time.Time                                   `json:"StatusUpdateDateTime"`
	TransactionFromDateTime *time.Time                                  `json:"TransactionFromDateTime"`
	TransactionToDateTime   *time.Time                                  `json:"TransactionToDateTime"`
}

type ObReadConsentResponse1 struct {
	Data  ObReadConsentResponse1Data `json:"Data"`
	Links *Links                     `json:"Links"`
	Meta  *Meta                      `json:"Meta"`
	Risk  map[string]interface{}     `json:"Risk"`
}
