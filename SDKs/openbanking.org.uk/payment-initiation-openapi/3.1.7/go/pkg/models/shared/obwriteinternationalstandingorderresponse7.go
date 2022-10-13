package shared

import (
	"time"
)

type ObWriteInternationalStandingOrderResponse7DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalStandingOrderResponse7DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                             `json:"ChargeBearer"`
	Creditor               *ObWriteInternationalStandingOrderResponse7DataInitiationCreditor        `json:"Creditor"`
	CreditorAccount        ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent   `json:"CreditorAgent"`
	CurrencyOfTransfer     string                                                                   `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount   `json:"DebtorAccount"`
	DestinationCountryCode *string                                                                  `json:"DestinationCountryCode"`
	ExtendedPurpose        *string                                                                  `json:"ExtendedPurpose"`
	FinalPaymentDateTime   *time.Time                                                               `json:"FinalPaymentDateTime"`
	FirstPaymentDateTime   time.Time                                                                `json:"FirstPaymentDateTime"`
	Frequency              string                                                                   `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                  `json:"NumberOfPayments"`
	Purpose                *string                                                                  `json:"Purpose"`
	Reference              *string                                                                  `json:"Reference"`
	SupplementaryData      map[string]interface{}                                                   `json:"SupplementaryData"`
}

type ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                                 `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                                                 `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                                                     `json:"NumberReceived"`
	NumberRequired     *int64                                                                     `json:"NumberRequired"`
	Status             ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteInternationalStandingOrderResponse7DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderResponse7DataRefundAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalStandingOrderResponse7DataRefundCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalStandingOrderResponse7DataRefund struct {
	Account  ObWriteInternationalStandingOrderResponse7DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalStandingOrderResponse7DataRefundAgent    `json:"Agent"`
	Creditor *ObWriteInternationalStandingOrderResponse7DataRefundCreditor `json:"Creditor"`
}

type ObWriteInternationalStandingOrderResponse7DataStatusEnum string

const (
	ObWriteInternationalStandingOrderResponse7DataStatusEnumCancelled           ObWriteInternationalStandingOrderResponse7DataStatusEnum = "Cancelled"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationCompleted ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationCompleted"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationFailed    ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationFailed"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationPending   ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationPending"
)

type ObWriteInternationalStandingOrderResponse7Data struct {
	Charges                      []ObWriteInternationalStandingOrderResponse7DataCharges           `json:"Charges"`
	ConsentID                    string                                                            `json:"ConsentId"`
	CreationDateTime             time.Time                                                         `json:"CreationDateTime"`
	Debtor                       *ObCashAccountDebtor4                                             `json:"Debtor"`
	Initiation                   ObWriteInternationalStandingOrderResponse7DataInitiation          `json:"Initiation"`
	InternationalStandingOrderID string                                                            `json:"InternationalStandingOrderId"`
	MultiAuthorisation           *ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation `json:"MultiAuthorisation"`
	Refund                       *ObWriteInternationalStandingOrderResponse7DataRefund             `json:"Refund"`
	Status                       ObWriteInternationalStandingOrderResponse7DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime         time.Time                                                         `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalStandingOrderResponse7 struct {
	Data  ObWriteInternationalStandingOrderResponse7Data `json:"Data"`
	Links *Links                                         `json:"Links"`
	Meta  *Meta                                          `json:"Meta"`
}
