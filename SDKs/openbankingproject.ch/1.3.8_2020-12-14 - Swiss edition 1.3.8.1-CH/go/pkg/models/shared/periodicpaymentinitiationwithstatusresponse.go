package shared

import (
"time")

type PeriodicPaymentInitiationWithStatusResponse struct {
    CreditorAccount AccountReference16Ch `json:"creditorAccount"`
    CreditorAddress *Address `json:"creditorAddress,omitempty"`
    CreditorAgent *CreditorAgent7Ch `json:"creditorAgent,omitempty"`
    CreditorName string `json:"creditorName"`
    DayOfExecution *DayOfExecutionEnum `json:"dayOfExecution,omitempty"`
    DebtorAccount AccountReference16Ch `json:"debtorAccount"`
    EndDate *time.Time `json:"endDate,omitempty"`
    EndToEndIdentification *string `json:"endToEndIdentification,omitempty"`
    ExecutionRule *ExecutionRuleEnum `json:"executionRule,omitempty"`
    Frequency FrequencyCodeEnum `json:"frequency"`
    InstructedAmount Amount `json:"instructedAmount"`
    PurposeCode *PurposeCodeEnum `json:"purposeCode,omitempty"`
    RemittanceInformationStructured *RemittanceInformationStructured `json:"remittanceInformationStructured,omitempty"`
    RemittanceInformationUnstructured *string `json:"remittanceInformationUnstructured,omitempty"`
    RemittanceInformationUnstructuredArray []string `json:"remittanceInformationUnstructuredArray,omitempty"`
    RequestedExecutionDate *time.Time `json:"requestedExecutionDate,omitempty"`
    RequestedExecutionTime *time.Time `json:"requestedExecutionTime,omitempty"`
    StartDate time.Time `json:"startDate"`
    TransactionStatus *TransactionStatusEnum `json:"transactionStatus,omitempty"`
    UltimateCreditor *string `json:"ultimateCreditor,omitempty"`
    UltimateDebtor *string `json:"ultimateDebtor,omitempty"`
    
}

