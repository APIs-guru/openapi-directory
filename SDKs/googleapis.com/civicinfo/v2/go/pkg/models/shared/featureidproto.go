package shared

type FeatureIDProto struct {
	CellID        *string                `json:"cellId"`
	Fprint        *string                `json:"fprint"`
	TemporaryData map[string]interface{} `json:"temporaryData"`
}
