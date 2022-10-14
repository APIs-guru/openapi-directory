package shared

type FindingTypeStats struct {
	FindingCount *int32  `json:"findingCount,omitempty"`
	FindingType  *string `json:"findingType,omitempty"`
}
