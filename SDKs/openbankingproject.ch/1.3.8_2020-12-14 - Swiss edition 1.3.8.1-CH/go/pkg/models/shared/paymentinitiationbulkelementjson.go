package shared

type PaymentInitiationBulkElementJSON struct {
	ChargeBearer                      *ChargeBearerEnum                `json:"chargeBearer,omitempty"`
	CreditorAccount                   AccountReference16Ch             `json:"creditorAccount"`
	CreditorAddress                   *Address                         `json:"creditorAddress,omitempty"`
	CreditorAgent                     *CreditorAgent7Ch                `json:"creditorAgent,omitempty"`
	CreditorAgentName                 *string                          `json:"creditorAgentName,omitempty"`
	CreditorID                        *string                          `json:"creditorId,omitempty"`
	CreditorName                      string                           `json:"creditorName"`
	CreditorNameAndAddress            *string                          `json:"creditorNameAndAddress,omitempty"`
	DebtorID                          *string                          `json:"debtorId,omitempty"`
	DebtorName                        string                           `json:"debtorName"`
	EndToEndIdentification            string                           `json:"endToEndIdentification"`
	EquivalentAmount                  *Amount                          `json:"equivalentAmount,omitempty"`
	ExchangeRateInformation           *ExchangeRateInformation1        `json:"exchangeRateInformation,omitempty"`
	InstructedAmount                  *Amount                          `json:"instructedAmount,omitempty"`
	IntermediaryAgent                 *string                          `json:"intermediaryAgent,omitempty"`
	PurposeCode                       *PurposeCodeEnum                 `json:"purposeCode,omitempty"`
	RemittanceInformationStructured   *RemittanceInformationStructured `json:"remittanceInformationStructured,omitempty"`
	RemittanceInformationUnstructured *string                          `json:"remittanceInformationUnstructured,omitempty"`
	ServiceLevel                      *ExternalServiceLevel1CodeEnum   `json:"serviceLevel,omitempty"`
	TransactionCurrency               *string                          `json:"transactionCurrency,omitempty"`
	UltimateCreditor                  *string                          `json:"ultimateCreditor,omitempty"`
	UltimateDebtor                    *string                          `json:"ultimateDebtor,omitempty"`
}
