package shared

type TopDirectionSources struct {
	DayCount     *int32        `json:"dayCount"`
	RegionCounts []RegionCount `json:"regionCounts"`
}
