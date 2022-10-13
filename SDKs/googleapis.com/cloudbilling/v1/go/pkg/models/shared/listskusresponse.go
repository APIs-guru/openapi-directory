package shared

type ListSkusResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Skus          []Sku   `json:"skus"`
}
