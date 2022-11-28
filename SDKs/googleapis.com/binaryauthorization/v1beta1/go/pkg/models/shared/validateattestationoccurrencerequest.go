package shared

// ValidateAttestationOccurrenceRequest
// Request message for ValidationHelperV1.ValidateAttestationOccurrence.
type ValidateAttestationOccurrenceRequest struct {
	Attestation           *AttestationOccurrence `json:"attestation,omitempty"`
	OccurrenceNote        *string                `json:"occurrenceNote,omitempty"`
	OccurrenceResourceURI *string                `json:"occurrenceResourceUri,omitempty"`
}
