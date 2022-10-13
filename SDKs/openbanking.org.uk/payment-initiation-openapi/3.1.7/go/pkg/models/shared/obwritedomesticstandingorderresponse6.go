package shared

import (
	"time"
)

type ObWriteDomesticStandingOrderResponse6DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderResponse6DataInitiation struct {
	CreditorAccount          ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount         `json:"CreditorAccount"`
	DebtorAccount            *ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount          `json:"DebtorAccount"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount"`
	FinalPaymentDateTime     *time.Time                                                                 `json:"FinalPaymentDateTime"`
	FirstPaymentAmount       ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                                  `json:"FirstPaymentDateTime"`
	Frequency                string                                                                     `json:"Frequency"`
	NumberOfPayments         *string                                                                    `json:"NumberOfPayments"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount"`
	RecurringPaymentDateTime *time.Time                                                                 `json:"RecurringPaymentDateTime"`
	Reference                *string                                                                    `json:"Reference"`
	SupplementaryData        map[string]interface{}                                                     `json:"SupplementaryData"`
}

type ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum string

const (
	ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnumAuthorised                   ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnumRejected                     ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                            `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                                            `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                                                `json:"NumberReceived"`
	NumberRequired     *int64                                                                `json:"NumberRequired"`
	Status             ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteDomesticStandingOrderResponse6DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrderResponse6DataRefund struct {
	Account ObWriteDomesticStandingOrderResponse6DataRefundAccount `json:"Account"`
}

type ObWriteDomesticStandingOrderResponse6DataStatusEnum string

const (
	ObWriteDomesticStandingOrderResponse6DataStatusEnumCancelled           ObWriteDomesticStandingOrderResponse6DataStatusEnum = "Cancelled"
	ObWriteDomesticStandingOrderResponse6DataStatusEnumInitiationCompleted ObWriteDomesticStandingOrderResponse6DataStatusEnum = "InitiationCompleted"
	ObWriteDomesticStandingOrderResponse6DataStatusEnumInitiationFailed    ObWriteDomesticStandingOrderResponse6DataStatusEnum = "InitiationFailed"
	ObWriteDomesticStandingOrderResponse6DataStatusEnumInitiationPending   ObWriteDomesticStandingOrderResponse6DataStatusEnum = "InitiationPending"
)

type ObWriteDomesticStandingOrderResponse6Data struct {
	Charges                 []ObWriteDomesticStandingOrderResponse6DataCharges           `json:"Charges"`
	ConsentID               string                                                       `json:"ConsentId"`
	CreationDateTime        time.Time                                                    `json:"CreationDateTime"`
	Debtor                  *ObCashAccountDebtor4                                        `json:"Debtor"`
	DomesticStandingOrderID string                                                       `json:"DomesticStandingOrderId"`
	Initiation              ObWriteDomesticStandingOrderResponse6DataInitiation          `json:"Initiation"`
	MultiAuthorisation      *ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation `json:"MultiAuthorisation"`
	Refund                  *ObWriteDomesticStandingOrderResponse6DataRefund             `json:"Refund"`
	Status                  ObWriteDomesticStandingOrderResponse6DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime    time.Time                                                    `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticStandingOrderResponse6 struct {
	Data  ObWriteDomesticStandingOrderResponse6Data `json:"Data"`
	Links *Links                                    `json:"Links"`
	Meta  *Meta                                     `json:"Meta"`
}
