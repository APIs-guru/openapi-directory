package shared

type Deblock struct {
	Enabled  *bool    `json:"enabled"`
	Strength *float64 `json:"strength"`
}
