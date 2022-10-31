package shared



type SearchResponse struct {
    AtContext *interface{} `json:"@context,omitempty"`
    AtType *interface{} `json:"@type,omitempty"`
    ItemListElement []interface{} `json:"itemListElement,omitempty"`
    
}

