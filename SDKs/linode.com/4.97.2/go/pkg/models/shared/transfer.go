package shared

// Transfer
// An object representing your network utilization for the current month, in Gigabytes.
type Transfer struct {
	Billable *int64 `json:"billable,omitempty"`
	Quota    *int64 `json:"quota,omitempty"`
	Used     *int64 `json:"used,omitempty"`
}
