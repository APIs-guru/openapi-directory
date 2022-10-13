package shared

type ReplicationCycle struct {
	ProgressPercent *int32  `json:"progressPercent"`
	StartTime       *string `json:"startTime"`
}
