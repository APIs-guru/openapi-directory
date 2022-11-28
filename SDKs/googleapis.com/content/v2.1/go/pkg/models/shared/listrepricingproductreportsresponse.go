package shared

// ListRepricingProductReportsResponse
// Response message for the ListRepricingProductReports method.
type ListRepricingProductReportsResponse struct {
	NextPageToken           *string                  `json:"nextPageToken,omitempty"`
	RepricingProductReports []RepricingProductReport `json:"repricingProductReports,omitempty"`
}
