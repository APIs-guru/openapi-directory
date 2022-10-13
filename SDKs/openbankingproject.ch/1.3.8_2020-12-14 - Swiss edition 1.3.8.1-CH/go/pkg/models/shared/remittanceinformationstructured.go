package shared

type RemittanceInformationStructuredScoRorQrRorIpiEnum string

const (
	RemittanceInformationStructuredScoRorQrRorIpiEnumScor RemittanceInformationStructuredScoRorQrRorIpiEnum = "SCOR"
	RemittanceInformationStructuredScoRorQrRorIpiEnumQrr  RemittanceInformationStructuredScoRorQrRorIpiEnum = "QRR"
	RemittanceInformationStructuredScoRorQrRorIpiEnumIpi  RemittanceInformationStructuredScoRorQrRorIpiEnum = "IPI"
)

type RemittanceInformationStructured struct {
	ScoRorQrRorIpi                  *RemittanceInformationStructuredScoRorQrRorIpiEnum `json:"SCORorQRRorIPI"`
	AdditionalRemittanceInformation *string                                            `json:"additionalRemittanceInformation"`
	Reference                       string                                             `json:"reference"`
	ReferenceIssuer                 *string                                            `json:"referenceIssuer"`
	ReferenceType                   *string                                            `json:"referenceType"`
}
