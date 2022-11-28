package shared

// ListProductSetsResponse
// Response message for the `ListProductSets` method.
type ListProductSetsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	ProductSets   []ProductSet `json:"productSets,omitempty"`
}
