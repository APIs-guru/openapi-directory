package shared

type ListRepricingProductReportsResponse struct {
	NextPageToken           *string                  `json:"nextPageToken"`
	RepricingProductReports []RepricingProductReport `json:"repricingProductReports"`
}
