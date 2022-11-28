package shared

// TopDirectionSources
// Top regions where driving-direction requests originated from.
type TopDirectionSources struct {
	DayCount     *int32        `json:"dayCount,omitempty"`
	RegionCounts []RegionCount `json:"regionCounts,omitempty"`
}
