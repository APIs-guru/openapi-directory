package shared

type TopDirectionSources struct {
	DayCount     *int32        `json:"dayCount,omitempty"`
	RegionCounts []RegionCount `json:"regionCounts,omitempty"`
}
