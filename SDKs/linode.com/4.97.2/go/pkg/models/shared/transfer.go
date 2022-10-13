package shared

type Transfer struct {
	Billable *int64 `json:"billable"`
	Quota    *int64 `json:"quota"`
	Used     *int64 `json:"used"`
}
