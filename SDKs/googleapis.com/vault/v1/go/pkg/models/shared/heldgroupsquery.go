package shared

type HeldGroupsQuery struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
	Terms     *string `json:"terms"`
}
