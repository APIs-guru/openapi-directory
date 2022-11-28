package shared

// GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
// A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
type GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse struct {
	AccountReports []GoogleAdsHomeservicesLocalservicesV1AccountReport `json:"accountReports,omitempty"`
	NextPageToken  *string                                             `json:"nextPageToken,omitempty"`
}
