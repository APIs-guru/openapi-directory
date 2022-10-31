package shared



type ListRepricingProductReportsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RepricingProductReports []RepricingProductReport `json:"repricingProductReports,omitempty"`
    
}

