package shared

type ListProductSetsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	ProductSets   []ProductSet `json:"productSets"`
}
