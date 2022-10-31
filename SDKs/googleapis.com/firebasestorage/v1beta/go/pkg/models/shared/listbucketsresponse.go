package shared



type ListBucketsResponse struct {
    Buckets []Bucket `json:"buckets,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

