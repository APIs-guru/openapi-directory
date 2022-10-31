package shared



type GoogleCloudDatacatalogV1beta1SearchCatalogResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Results []GoogleCloudDatacatalogV1beta1SearchCatalogResult `json:"results,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

