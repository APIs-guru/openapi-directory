package shared

type ListOperationsResponse struct {
	MissingZones []string    `json:"missingZones"`
	Operations   []Operation `json:"operations"`
}
