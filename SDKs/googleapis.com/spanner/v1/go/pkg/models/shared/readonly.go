package shared

type ReadOnly struct {
	ExactStaleness      *string `json:"exactStaleness"`
	MaxStaleness        *string `json:"maxStaleness"`
	MinReadTimestamp    *string `json:"minReadTimestamp"`
	ReadTimestamp       *string `json:"readTimestamp"`
	ReturnReadTimestamp *bool   `json:"returnReadTimestamp"`
	Strong              *bool   `json:"strong"`
}
