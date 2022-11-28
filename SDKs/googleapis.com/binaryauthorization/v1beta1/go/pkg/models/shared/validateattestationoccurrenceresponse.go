package shared

type ValidateAttestationOccurrenceResponseResultEnum string

const (
	ValidateAttestationOccurrenceResponseResultEnumResultUnspecified        ValidateAttestationOccurrenceResponseResultEnum = "RESULT_UNSPECIFIED"
	ValidateAttestationOccurrenceResponseResultEnumVerified                 ValidateAttestationOccurrenceResponseResultEnum = "VERIFIED"
	ValidateAttestationOccurrenceResponseResultEnumAttestationNotVerifiable ValidateAttestationOccurrenceResponseResultEnum = "ATTESTATION_NOT_VERIFIABLE"
)

// ValidateAttestationOccurrenceResponse
// Response message for ValidationHelperV1.ValidateAttestationOccurrence.
type ValidateAttestationOccurrenceResponse struct {
	DenialReason *string                                          `json:"denialReason,omitempty"`
	Result       *ValidateAttestationOccurrenceResponseResultEnum `json:"result,omitempty"`
}
