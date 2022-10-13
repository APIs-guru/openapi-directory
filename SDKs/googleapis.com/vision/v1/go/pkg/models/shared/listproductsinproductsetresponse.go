package shared

type ListProductsInProductSetResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Products      []Product `json:"products"`
}
