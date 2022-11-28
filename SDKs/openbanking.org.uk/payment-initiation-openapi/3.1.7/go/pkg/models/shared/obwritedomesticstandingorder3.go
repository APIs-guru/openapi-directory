package shared

import (
	"time"
)

// ObWriteDomesticStandingOrder3DataInitiationCreditorAccount
// Identification assigned by an institution to identify an account. This identification is known by the account owner.
type ObWriteDomesticStandingOrder3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticStandingOrder3DataInitiationDebtorAccount
// Provides the details to identify the debtor account.
type ObWriteDomesticStandingOrder3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
// The amount of the final Standing Order
type ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
// The amount of the first Standing Order
type ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
// The amount of the recurring Standing Order
type ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrder3DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
type ObWriteDomesticStandingOrder3DataInitiation struct {
	CreditorAccount          ObWriteDomesticStandingOrder3DataInitiationCreditorAccount         `json:"CreditorAccount"`
	DebtorAccount            *ObWriteDomesticStandingOrder3DataInitiationDebtorAccount          `json:"DebtorAccount,omitempty"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount,omitempty"`
	FinalPaymentDateTime     *time.Time                                                         `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentAmount       ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                          `json:"FirstPaymentDateTime"`
	Frequency                string                                                             `json:"Frequency"`
	NumberOfPayments         *string                                                            `json:"NumberOfPayments,omitempty"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount,omitempty"`
	RecurringPaymentDateTime *time.Time                                                         `json:"RecurringPaymentDateTime,omitempty"`
	Reference                *string                                                            `json:"Reference,omitempty"`
	SupplementaryData        map[string]interface{}                                             `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticStandingOrder3Data struct {
	ConsentID  string                                      `json:"ConsentId"`
	Initiation ObWriteDomesticStandingOrder3DataInitiation `json:"Initiation"`
}

type ObWriteDomesticStandingOrder3 struct {
	Data ObWriteDomesticStandingOrder3Data `json:"Data"`
	Risk ObRisk1                           `json:"Risk"`
}
