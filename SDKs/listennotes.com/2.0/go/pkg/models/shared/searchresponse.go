package shared

type SearchResponse struct {
	Count      *int64        `json:"count"`
	NextOffset *int64        `json:"next_offset"`
	Results    []interface{} `json:"results"`
	Took       *float64      `json:"took"`
	Total      *int64        `json:"total"`
}
