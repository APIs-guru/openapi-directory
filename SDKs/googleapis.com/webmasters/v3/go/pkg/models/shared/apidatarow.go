package shared

type APIDataRow struct {
	Clicks      *float64 `json:"clicks"`
	Ctr         *float64 `json:"ctr"`
	Impressions *float64 `json:"impressions"`
	Keys        []string `json:"keys"`
	Position    *float64 `json:"position"`
}
