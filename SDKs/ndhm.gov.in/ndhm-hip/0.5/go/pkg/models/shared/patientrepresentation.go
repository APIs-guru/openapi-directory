package shared

type PatientRepresentation struct {
	CareContexts    []CareContextRepresentation `json:"careContexts"`
	Display         string                      `json:"display"`
	MatchedBy       []IdentifierTypeEnum        `json:"matchedBy"`
	ReferenceNumber string                      `json:"referenceNumber"`
}
