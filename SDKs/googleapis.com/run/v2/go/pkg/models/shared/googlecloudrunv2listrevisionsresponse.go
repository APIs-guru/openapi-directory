package shared



type GoogleCloudRunV2ListRevisionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Revisions []GoogleCloudRunV2Revision `json:"revisions,omitempty"`
    
}

