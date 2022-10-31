package shared

type AccountBalance struct {
	AutoReload *bool    `json:"autoReload,omitempty"`
	Value      *float64 `json:"value,omitempty"`
}
