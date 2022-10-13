package shared

type SearchResponse struct {
	AtContext       *interface{}  `json:"@context"`
	AtType          *interface{}  `json:"@type"`
	ItemListElement []interface{} `json:"itemListElement"`
}
