package shared

type AccountBalance struct {
	AutoReload *bool    `json:"autoReload"`
	Value      *float64 `json:"value"`
}
