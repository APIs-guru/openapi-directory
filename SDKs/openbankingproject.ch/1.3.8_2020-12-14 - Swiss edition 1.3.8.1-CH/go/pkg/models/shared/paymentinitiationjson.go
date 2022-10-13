package shared

import (
	"time"
)

type PaymentInitiationJSON struct {
	ChargeBearer                      *ChargeBearerEnum                `json:"chargeBearer"`
	CreditorAccount                   AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                   *Address                         `json:"creditorAddress"`
	CreditorAgent                     *CreditorAgent7Ch                `json:"creditorAgent"`
	CreditorAgentName                 *string                          `json:"creditorAgentName"`
	CreditorID                        *string                          `json:"creditorId"`
	CreditorName                      string                           `json:"creditorName"`
	CreditorNameAndAddress            *string                          `json:"creditorNameAndAddress"`
	DebtorAccount                     AccountReference16Ch             `json:"debtorAccount"`
	DebtorAgent                       *DebtorAgent7Ch                  `json:"debtorAgent"`
	DebtorID                          *string                          `json:"debtorId"`
	DebtorName                        string                           `json:"debtorName"`
	EndToEndIdentification            string                           `json:"endToEndIdentification"`
	EquivalentAmount                  *Amount                          `json:"equivalentAmount"`
	ExchangeRateInformation           *ExchangeRateInformation1        `json:"exchangeRateInformation"`
	InstructedAmount                  *Amount                          `json:"instructedAmount"`
	IntermediaryAgent                 *string                          `json:"intermediaryAgent"`
	PurposeCode                       *PurposeCodeEnum                 `json:"purposeCode"`
	RemittanceInformationStructured   *RemittanceInformationStructured `json:"remittanceInformationStructured"`
	RemittanceInformationUnstructured *string                          `json:"remittanceInformationUnstructured"`
	RequestedExecutionDate            time.Time                        `json:"requestedExecutionDate"`
	ServiceLevel                      *ExternalServiceLevel1CodeEnum   `json:"serviceLevel"`
	TransactionCurrency               *string                          `json:"transactionCurrency"`
	UltimateCreditor                  *string                          `json:"ultimateCreditor"`
	UltimateDebtor                    *string                          `json:"ultimateDebtor"`
}
