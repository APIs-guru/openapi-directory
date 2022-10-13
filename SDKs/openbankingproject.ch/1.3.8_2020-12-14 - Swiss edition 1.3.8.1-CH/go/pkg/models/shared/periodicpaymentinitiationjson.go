package shared

import (
	"time"
)

type PeriodicPaymentInitiationJSON struct {
	ChargeBearer                      *ChargeBearerEnum                `json:"chargeBearer"`
	CreditorAccount                   AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                   *Address                         `json:"creditorAddress"`
	CreditorAgent                     *CreditorAgent7Ch                `json:"creditorAgent"`
	CreditorAgentName                 *string                          `json:"creditorAgentName"`
	CreditorID                        *string                          `json:"creditorId"`
	CreditorName                      string                           `json:"creditorName"`
	CreditorNameAndAddress            *string                          `json:"creditorNameAndAddress"`
	DayOfExecution                    *DayOfExecutionEnum              `json:"dayOfExecution"`
	DebtorAccount                     AccountReference16Ch             `json:"debtorAccount"`
	DebtorAgent                       *DebtorAgent7Ch                  `json:"debtorAgent"`
	DebtorID                          *string                          `json:"debtorId"`
	DebtorName                        string                           `json:"debtorName"`
	EndDate                           *time.Time                       `json:"endDate"`
	EndToEndIdentification            string                           `json:"endToEndIdentification"`
	EquivalentAmount                  *Amount                          `json:"equivalentAmount"`
	ExchangeRateInformation           *ExchangeRateInformation1        `json:"exchangeRateInformation"`
	ExecutionRule                     *ExecutionRuleEnum               `json:"executionRule"`
	Frequency                         FrequencyCodeEnum                `json:"frequency"`
	InstructedAmount                  *Amount                          `json:"instructedAmount"`
	IntermediaryAgent                 *string                          `json:"intermediaryAgent"`
	PurposeCode                       *PurposeCodeEnum                 `json:"purposeCode"`
	RemittanceInformationStructured   *RemittanceInformationStructured `json:"remittanceInformationStructured"`
	RemittanceInformationUnstructured *string                          `json:"remittanceInformationUnstructured"`
	ServiceLevel                      *ExternalServiceLevel1CodeEnum   `json:"serviceLevel"`
	StartDate                         time.Time                        `json:"startDate"`
	TransactionCurrency               *string                          `json:"transactionCurrency"`
	UltimateCreditor                  *string                          `json:"ultimateCreditor"`
	UltimateDebtor                    *string                          `json:"ultimateDebtor"`
}
