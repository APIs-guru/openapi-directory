package shared

import (
	"time"
)

type ObWriteDomesticStandingOrder3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrder3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrder3DataInitiation struct {
	CreditorAccount          ObWriteDomesticStandingOrder3DataInitiationCreditorAccount         `json:"CreditorAccount"`
	DebtorAccount            *ObWriteDomesticStandingOrder3DataInitiationDebtorAccount          `json:"DebtorAccount"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount"`
	FinalPaymentDateTime     *time.Time                                                         `json:"FinalPaymentDateTime"`
	FirstPaymentAmount       ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                          `json:"FirstPaymentDateTime"`
	Frequency                string                                                             `json:"Frequency"`
	NumberOfPayments         *string                                                            `json:"NumberOfPayments"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount"`
	RecurringPaymentDateTime *time.Time                                                         `json:"RecurringPaymentDateTime"`
	Reference                *string                                                            `json:"Reference"`
	SupplementaryData        map[string]interface{}                                             `json:"SupplementaryData"`
}

type ObWriteDomesticStandingOrder3Data struct {
	ConsentID  string                                      `json:"ConsentId"`
	Initiation ObWriteDomesticStandingOrder3DataInitiation `json:"Initiation"`
}

type ObWriteDomesticStandingOrder3 struct {
	Data ObWriteDomesticStandingOrder3Data `json:"Data"`
	Risk ObRisk1                           `json:"Risk"`
}
