package shared

import (
	"time"
)

type PaymentInitiationWithStatusResponse struct {
	CreditorAccount                        AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                        *Address                         `json:"creditorAddress"`
	CreditorAgent                          *CreditorAgent7Ch                `json:"creditorAgent"`
	CreditorName                           string                           `json:"creditorName"`
	DebtorAccount                          AccountReference16Ch             `json:"debtorAccount"`
	EndToEndIdentification                 *string                          `json:"endToEndIdentification"`
	InstructedAmount                       Amount                           `json:"instructedAmount"`
	PurposeCode                            *PurposeCodeEnum                 `json:"purposeCode"`
	RemittanceInformationStructured        *RemittanceInformationStructured `json:"remittanceInformationStructured"`
	RemittanceInformationUnstructured      *string                          `json:"remittanceInformationUnstructured"`
	RemittanceInformationUnstructuredArray []string                         `json:"remittanceInformationUnstructuredArray"`
	RequestedExecutionDate                 *time.Time                       `json:"requestedExecutionDate"`
	RequestedExecutionTime                 *time.Time                       `json:"requestedExecutionTime"`
	TransactionStatus                      *TransactionStatusEnum           `json:"transactionStatus"`
	UltimateCreditor                       *string                          `json:"ultimateCreditor"`
	UltimateDebtor                         *string                          `json:"ultimateDebtor"`
}
