package shared

type ListBusinessCategoriesResponse struct {
	Categories         []Category `json:"categories"`
	NextPageToken      *string    `json:"nextPageToken"`
	TotalCategoryCount *int32     `json:"totalCategoryCount"`
}
