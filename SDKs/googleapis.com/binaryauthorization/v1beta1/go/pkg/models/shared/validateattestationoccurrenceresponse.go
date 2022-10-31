package shared

type ValidateAttestationOccurrenceResponseResultEnum string

const (
	ValidateAttestationOccurrenceResponseResultEnumResultUnspecified        ValidateAttestationOccurrenceResponseResultEnum = "RESULT_UNSPECIFIED"
	ValidateAttestationOccurrenceResponseResultEnumVerified                 ValidateAttestationOccurrenceResponseResultEnum = "VERIFIED"
	ValidateAttestationOccurrenceResponseResultEnumAttestationNotVerifiable ValidateAttestationOccurrenceResponseResultEnum = "ATTESTATION_NOT_VERIFIABLE"
)

type ValidateAttestationOccurrenceResponse struct {
	DenialReason *string                                          `json:"denialReason,omitempty"`
	Result       *ValidateAttestationOccurrenceResponseResultEnum `json:"result,omitempty"`
}
