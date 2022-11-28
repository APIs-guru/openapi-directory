package shared

// FindingTypeStats
// A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
type FindingTypeStats struct {
	FindingCount *int32  `json:"findingCount,omitempty"`
	FindingType  *string `json:"findingType,omitempty"`
}
