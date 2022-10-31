package shared



type GoogleCloudDatalabelingV1beta1ListDatasetsResponse struct {
    Datasets []GoogleCloudDatalabelingV1beta1Dataset `json:"datasets,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

