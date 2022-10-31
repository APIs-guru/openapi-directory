package shared

type ReadOnly struct {
	ExactStaleness      *string `json:"exactStaleness,omitempty"`
	MaxStaleness        *string `json:"maxStaleness,omitempty"`
	MinReadTimestamp    *string `json:"minReadTimestamp,omitempty"`
	ReadTimestamp       *string `json:"readTimestamp,omitempty"`
	ReturnReadTimestamp *bool   `json:"returnReadTimestamp,omitempty"`
	Strong              *bool   `json:"strong,omitempty"`
}
