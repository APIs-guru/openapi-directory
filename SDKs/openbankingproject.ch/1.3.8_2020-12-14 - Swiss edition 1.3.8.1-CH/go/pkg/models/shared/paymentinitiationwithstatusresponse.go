package shared

import (
	"time"
)

type PaymentInitiationWithStatusResponse struct {
	CreditorAccount                        AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                        *Address                         `json:"creditorAddress,omitempty"`
	CreditorAgent                          *CreditorAgent7Ch                `json:"creditorAgent,omitempty"`
	CreditorName                           string                           `json:"creditorName"`
	DebtorAccount                          AccountReference16Ch             `json:"debtorAccount"`
	EndToEndIdentification                 *string                          `json:"endToEndIdentification,omitempty"`
	InstructedAmount                       Amount                           `json:"instructedAmount"`
	PurposeCode                            *PurposeCodeEnum                 `json:"purposeCode,omitempty"`
	RemittanceInformationStructured        *RemittanceInformationStructured `json:"remittanceInformationStructured,omitempty"`
	RemittanceInformationUnstructured      *string                          `json:"remittanceInformationUnstructured,omitempty"`
	RemittanceInformationUnstructuredArray []string                         `json:"remittanceInformationUnstructuredArray,omitempty"`
	RequestedExecutionDate                 *time.Time                       `json:"requestedExecutionDate,omitempty"`
	RequestedExecutionTime                 *time.Time                       `json:"requestedExecutionTime,omitempty"`
	TransactionStatus                      *TransactionStatusEnum           `json:"transactionStatus,omitempty"`
	UltimateCreditor                       *string                          `json:"ultimateCreditor,omitempty"`
	UltimateDebtor                         *string                          `json:"ultimateDebtor,omitempty"`
}
