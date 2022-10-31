package shared



type GoogleCloudVisionV1p1beta1ProductSearchResultsResult struct {
    Image *string `json:"image,omitempty"`
    Product *GoogleCloudVisionV1p1beta1Product `json:"product,omitempty"`
    Score *float32 `json:"score,omitempty"`
    
}

