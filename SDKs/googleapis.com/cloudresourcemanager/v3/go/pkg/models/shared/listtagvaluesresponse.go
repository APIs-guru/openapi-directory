package shared



type ListTagValuesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TagValues []TagValue `json:"tagValues,omitempty"`
    
}

