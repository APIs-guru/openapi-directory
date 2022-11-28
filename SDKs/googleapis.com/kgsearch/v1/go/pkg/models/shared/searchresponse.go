package shared

// SearchResponse
// Response message includes the context and a list of matching results which contain the detail of associated entities.
type SearchResponse struct {
	AtContext       *interface{}  `json:"@context,omitempty"`
	AtType          *interface{}  `json:"@type,omitempty"`
	ItemListElement []interface{} `json:"itemListElement,omitempty"`
}
