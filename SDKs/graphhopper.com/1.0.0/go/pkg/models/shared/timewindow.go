package shared

type TimeWindow struct {
	Earliest *int64 `json:"earliest"`
	Latest   *int64 `json:"latest"`
}
