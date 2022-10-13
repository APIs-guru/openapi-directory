package shared

type KeyRangeInfo struct {
	ContextValues []ContextValue   `json:"contextValues"`
	EndKeyIndex   *int32           `json:"endKeyIndex"`
	Info          *LocalizedString `json:"info"`
	KeysCount     *string          `json:"keysCount"`
	Metric        *LocalizedString `json:"metric"`
	StartKeyIndex *int32           `json:"startKeyIndex"`
	TimeOffset    *string          `json:"timeOffset"`
	Unit          *LocalizedString `json:"unit"`
	Value         *float32         `json:"value"`
}
