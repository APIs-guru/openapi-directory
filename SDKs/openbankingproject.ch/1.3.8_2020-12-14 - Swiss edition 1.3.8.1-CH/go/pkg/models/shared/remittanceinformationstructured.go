package shared

type RemittanceInformationStructuredScoRorQrRorIpiEnum string

const (
	RemittanceInformationStructuredScoRorQrRorIpiEnumScor RemittanceInformationStructuredScoRorQrRorIpiEnum = "SCOR"
	RemittanceInformationStructuredScoRorQrRorIpiEnumQrr  RemittanceInformationStructuredScoRorQrRorIpiEnum = "QRR"
	RemittanceInformationStructuredScoRorQrRorIpiEnumIpi  RemittanceInformationStructuredScoRorQrRorIpiEnum = "IPI"
)

// RemittanceInformationStructured
// Structured remittance information.
type RemittanceInformationStructured struct {
	ScoRorQrRorIpi                  *RemittanceInformationStructuredScoRorQrRorIpiEnum `json:"SCORorQRRorIPI,omitempty"`
	AdditionalRemittanceInformation *string                                            `json:"additionalRemittanceInformation,omitempty"`
	Reference                       string                                             `json:"reference"`
	ReferenceIssuer                 *string                                            `json:"referenceIssuer,omitempty"`
	ReferenceType                   *string                                            `json:"referenceType,omitempty"`
}
