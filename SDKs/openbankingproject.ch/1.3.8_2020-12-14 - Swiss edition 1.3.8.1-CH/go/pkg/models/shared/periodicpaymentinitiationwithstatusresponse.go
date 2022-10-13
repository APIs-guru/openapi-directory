package shared

import (
	"time"
)

type PeriodicPaymentInitiationWithStatusResponse struct {
	CreditorAccount                        AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                        *Address                         `json:"creditorAddress"`
	CreditorAgent                          *CreditorAgent7Ch                `json:"creditorAgent"`
	CreditorName                           string                           `json:"creditorName"`
	DayOfExecution                         *DayOfExecutionEnum              `json:"dayOfExecution"`
	DebtorAccount                          AccountReference16Ch             `json:"debtorAccount"`
	EndDate                                *time.Time                       `json:"endDate"`
	EndToEndIdentification                 *string                          `json:"endToEndIdentification"`
	ExecutionRule                          *ExecutionRuleEnum               `json:"executionRule"`
	Frequency                              FrequencyCodeEnum                `json:"frequency"`
	InstructedAmount                       Amount                           `json:"instructedAmount"`
	PurposeCode                            *PurposeCodeEnum                 `json:"purposeCode"`
	RemittanceInformationStructured        *RemittanceInformationStructured `json:"remittanceInformationStructured"`
	RemittanceInformationUnstructured      *string                          `json:"remittanceInformationUnstructured"`
	RemittanceInformationUnstructuredArray []string                         `json:"remittanceInformationUnstructuredArray"`
	RequestedExecutionDate                 *time.Time                       `json:"requestedExecutionDate"`
	RequestedExecutionTime                 *time.Time                       `json:"requestedExecutionTime"`
	StartDate                              time.Time                        `json:"startDate"`
	TransactionStatus                      *TransactionStatusEnum           `json:"transactionStatus"`
	UltimateCreditor                       *string                          `json:"ultimateCreditor"`
	UltimateDebtor                         *string                          `json:"ultimateDebtor"`
}
