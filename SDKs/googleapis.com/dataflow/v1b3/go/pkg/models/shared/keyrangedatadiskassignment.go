package shared

// KeyRangeDataDiskAssignment
// Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
type KeyRangeDataDiskAssignment struct {
	DataDisk *string `json:"dataDisk,omitempty"`
	End      *string `json:"end,omitempty"`
	Start    *string `json:"start,omitempty"`
}
