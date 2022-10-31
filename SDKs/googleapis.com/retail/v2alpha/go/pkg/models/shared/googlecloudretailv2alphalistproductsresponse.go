package shared



type GoogleCloudRetailV2alphaListProductsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Products []GoogleCloudRetailV2alphaProduct `json:"products,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

