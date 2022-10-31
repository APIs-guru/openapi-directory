package shared



type ListFindingsResponse struct {
    Findings []GoogleCloudSecuritycenterV1beta1Finding `json:"findings,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

