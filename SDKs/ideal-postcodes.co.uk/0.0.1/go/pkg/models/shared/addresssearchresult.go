package shared

type AddressSearchResult struct {
	Hits  []Address `json:"hits"`
	Limit *int32    `json:"limit"`
	Page  *int32    `json:"page"`
	Total *int32    `json:"total"`
}
