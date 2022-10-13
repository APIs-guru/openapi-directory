package shared

type HeldMailQuery struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
	Terms     *string `json:"terms"`
}
