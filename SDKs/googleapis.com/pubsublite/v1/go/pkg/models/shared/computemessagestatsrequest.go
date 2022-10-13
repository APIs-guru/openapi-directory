package shared

type ComputeMessageStatsRequest struct {
	EndCursor   *Cursor `json:"endCursor"`
	Partition   *string `json:"partition"`
	StartCursor *Cursor `json:"startCursor"`
}
