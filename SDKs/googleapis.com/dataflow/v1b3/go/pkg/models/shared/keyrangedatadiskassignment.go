package shared

type KeyRangeDataDiskAssignment struct {
	DataDisk *string `json:"dataDisk"`
	End      *string `json:"end"`
	Start    *string `json:"start"`
}
