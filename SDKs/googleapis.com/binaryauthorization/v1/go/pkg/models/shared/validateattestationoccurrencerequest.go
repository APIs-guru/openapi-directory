package shared

type ValidateAttestationOccurrenceRequest struct {
	Attestation           *AttestationOccurrence `json:"attestation"`
	OccurrenceNote        *string                `json:"occurrenceNote"`
	OccurrenceResourceURI *string                `json:"occurrenceResourceUri"`
}
