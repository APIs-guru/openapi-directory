package shared



type ListProjectBillingInfoResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ProjectBillingInfo []ProjectBillingInfo `json:"projectBillingInfo,omitempty"`
    
}

