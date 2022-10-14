package shared

type PatientRepresentation struct {
	CareContexts    []CareContextRepresentation `json:"careContexts,omitempty"`
	Display         string                      `json:"display"`
	MatchedBy       []IdentifierTypeEnum        `json:"matchedBy,omitempty"`
	ReferenceNumber string                      `json:"referenceNumber"`
}
