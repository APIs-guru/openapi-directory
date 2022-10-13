package shared

type GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary struct {
	DifferenceCount *int32          `json:"differenceCount"`
	ErrorCount      *int32          `json:"errorCount"`
	LogCount        *int32          `json:"logCount"`
	NewestDate      *GoogleTypeDate `json:"newestDate"`
	OldestDate      *GoogleTypeDate `json:"oldestDate"`
	UnchangedCount  *int32          `json:"unchangedCount"`
}
