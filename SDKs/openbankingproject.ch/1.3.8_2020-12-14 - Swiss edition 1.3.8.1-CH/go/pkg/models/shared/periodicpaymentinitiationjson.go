package shared

import (
"time")

type PeriodicPaymentInitiationJSON struct {
    ChargeBearer *ChargeBearerEnum `json:"chargeBearer,omitempty"`
    CreditorAccount AccountReference16Ch `json:"creditorAccount"`
    CreditorAddress *Address `json:"creditorAddress,omitempty"`
    CreditorAgent *CreditorAgent7Ch `json:"creditorAgent,omitempty"`
    CreditorAgentName *string `json:"creditorAgentName,omitempty"`
    CreditorID *string `json:"creditorId,omitempty"`
    CreditorName string `json:"creditorName"`
    CreditorNameAndAddress *string `json:"creditorNameAndAddress,omitempty"`
    DayOfExecution *DayOfExecutionEnum `json:"dayOfExecution,omitempty"`
    DebtorAccount AccountReference16Ch `json:"debtorAccount"`
    DebtorAgent *DebtorAgent7Ch `json:"debtorAgent,omitempty"`
    DebtorID *string `json:"debtorId,omitempty"`
    DebtorName string `json:"debtorName"`
    EndDate *time.Time `json:"endDate,omitempty"`
    EndToEndIdentification string `json:"endToEndIdentification"`
    EquivalentAmount *Amount `json:"equivalentAmount,omitempty"`
    ExchangeRateInformation *ExchangeRateInformation1 `json:"exchangeRateInformation,omitempty"`
    ExecutionRule *ExecutionRuleEnum `json:"executionRule,omitempty"`
    Frequency FrequencyCodeEnum `json:"frequency"`
    InstructedAmount *Amount `json:"instructedAmount,omitempty"`
    IntermediaryAgent *string `json:"intermediaryAgent,omitempty"`
    PurposeCode *PurposeCodeEnum `json:"purposeCode,omitempty"`
    RemittanceInformationStructured *RemittanceInformationStructured `json:"remittanceInformationStructured,omitempty"`
    RemittanceInformationUnstructured *string `json:"remittanceInformationUnstructured,omitempty"`
    ServiceLevel *ExternalServiceLevel1CodeEnum `json:"serviceLevel,omitempty"`
    StartDate time.Time `json:"startDate"`
    TransactionCurrency *string `json:"transactionCurrency,omitempty"`
    UltimateCreditor *string `json:"ultimateCreditor,omitempty"`
    UltimateDebtor *string `json:"ultimateDebtor,omitempty"`
    
}

