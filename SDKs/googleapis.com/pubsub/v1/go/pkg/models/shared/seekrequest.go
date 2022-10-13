package shared

type SeekRequest struct {
	Snapshot *string `json:"snapshot"`
	Time     *string `json:"time"`
}
