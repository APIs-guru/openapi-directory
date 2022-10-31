package shared

type APIDataRow struct {
	Clicks      *float64 `json:"clicks,omitempty"`
	Ctr         *float64 `json:"ctr,omitempty"`
	Impressions *float64 `json:"impressions,omitempty"`
	Keys        []string `json:"keys,omitempty"`
	Position    *float64 `json:"position,omitempty"`
}
