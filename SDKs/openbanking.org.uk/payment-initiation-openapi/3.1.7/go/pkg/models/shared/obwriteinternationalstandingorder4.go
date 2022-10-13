package shared

import (
	"time"
)

type ObWriteInternationalStandingOrder4DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalStandingOrder4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrder4DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalStandingOrder4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrder4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalStandingOrder4DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                     `json:"ChargeBearer"`
	Creditor               *ObWriteInternationalStandingOrder4DataInitiationCreditor        `json:"Creditor"`
	CreditorAccount        ObWriteInternationalStandingOrder4DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrder4DataInitiationCreditorAgent   `json:"CreditorAgent"`
	CurrencyOfTransfer     string                                                           `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrder4DataInitiationDebtorAccount   `json:"DebtorAccount"`
	DestinationCountryCode *string                                                          `json:"DestinationCountryCode"`
	ExtendedPurpose        *string                                                          `json:"ExtendedPurpose"`
	FinalPaymentDateTime   *time.Time                                                       `json:"FinalPaymentDateTime"`
	FirstPaymentDateTime   time.Time                                                        `json:"FirstPaymentDateTime"`
	Frequency              string                                                           `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrder4DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                          `json:"NumberOfPayments"`
	Purpose                *string                                                          `json:"Purpose"`
	Reference              *string                                                          `json:"Reference"`
	SupplementaryData      map[string]interface{}                                           `json:"SupplementaryData"`
}

type ObWriteInternationalStandingOrder4Data struct {
	ConsentID  string                                           `json:"ConsentId"`
	Initiation ObWriteInternationalStandingOrder4DataInitiation `json:"Initiation"`
}

type ObWriteInternationalStandingOrder4 struct {
	Data ObWriteInternationalStandingOrder4Data `json:"Data"`
	Risk ObRisk1                                `json:"Risk"`
}
