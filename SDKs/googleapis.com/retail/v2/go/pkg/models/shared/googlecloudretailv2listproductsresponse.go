package shared



type GoogleCloudRetailV2ListProductsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Products []GoogleCloudRetailV2Product `json:"products,omitempty"`
    
}

