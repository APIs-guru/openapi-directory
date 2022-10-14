package shared

type ListOperationsResponse struct {
	MissingZones []string    `json:"missingZones,omitempty"`
	Operations   []Operation `json:"operations,omitempty"`
}
