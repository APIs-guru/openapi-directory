package shared



type GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary struct {
    DifferenceCount *int32 `json:"differenceCount,omitempty"`
    ErrorCount *int32 `json:"errorCount,omitempty"`
    LogCount *int32 `json:"logCount,omitempty"`
    NewestDate *GoogleTypeDate `json:"newestDate,omitempty"`
    OldestDate *GoogleTypeDate `json:"oldestDate,omitempty"`
    UnchangedCount *int32 `json:"unchangedCount,omitempty"`
    
}

