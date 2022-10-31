package shared

import (
	"time"
)

type ObFundsConfirmationConsentResponse1DataDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObFundsConfirmationConsentResponse1DataStatusEnum string

const (
	ObFundsConfirmationConsentResponse1DataStatusEnumAuthorised            ObFundsConfirmationConsentResponse1DataStatusEnum = "Authorised"
	ObFundsConfirmationConsentResponse1DataStatusEnumAwaitingAuthorisation ObFundsConfirmationConsentResponse1DataStatusEnum = "AwaitingAuthorisation"
	ObFundsConfirmationConsentResponse1DataStatusEnumRejected              ObFundsConfirmationConsentResponse1DataStatusEnum = "Rejected"
	ObFundsConfirmationConsentResponse1DataStatusEnumRevoked               ObFundsConfirmationConsentResponse1DataStatusEnum = "Revoked"
)

type ObFundsConfirmationConsentResponse1Data struct {
	ConsentID            string                                               `json:"ConsentId"`
	CreationDateTime     time.Time                                            `json:"CreationDateTime"`
	DebtorAccount        ObFundsConfirmationConsentResponse1DataDebtorAccount `json:"DebtorAccount"`
	ExpirationDateTime   *time.Time                                           `json:"ExpirationDateTime,omitempty"`
	Status               ObFundsConfirmationConsentResponse1DataStatusEnum    `json:"Status"`
	StatusUpdateDateTime time.Time                                            `json:"StatusUpdateDateTime"`
}

type ObFundsConfirmationConsentResponse1 struct {
	Data  ObFundsConfirmationConsentResponse1Data `json:"Data"`
	Links *Links                                  `json:"Links,omitempty"`
	Meta  *Meta                                   `json:"Meta,omitempty"`
}
