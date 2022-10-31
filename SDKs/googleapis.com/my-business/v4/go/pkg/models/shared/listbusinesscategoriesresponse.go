package shared



type ListBusinessCategoriesResponse struct {
    Categories []Category `json:"categories,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalCategoryCount *int32 `json:"totalCategoryCount,omitempty"`
    
}

