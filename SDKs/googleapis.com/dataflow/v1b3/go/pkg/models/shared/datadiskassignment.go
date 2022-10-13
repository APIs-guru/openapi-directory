package shared

type DataDiskAssignment struct {
	DataDisks  []string `json:"dataDisks"`
	VMInstance *string  `json:"vmInstance"`
}
