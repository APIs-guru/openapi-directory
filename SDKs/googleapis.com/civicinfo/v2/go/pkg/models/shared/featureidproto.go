package shared

type FeatureIDProto struct {
	CellID        *string                `json:"cellId,omitempty"`
	Fprint        *string                `json:"fprint,omitempty"`
	TemporaryData map[string]interface{} `json:"temporaryData,omitempty"`
}
