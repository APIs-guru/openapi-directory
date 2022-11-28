package shared

// ListProjectBillingInfoResponse
// Request message for `ListProjectBillingInfoResponse`.
type ListProjectBillingInfoResponse struct {
	NextPageToken      *string              `json:"nextPageToken,omitempty"`
	ProjectBillingInfo []ProjectBillingInfo `json:"projectBillingInfo,omitempty"`
}
