package shared

// GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
// A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
type GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse struct {
	DetailedLeadReports []GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport `json:"detailedLeadReports,omitempty"`
	NextPageToken       *string                                                  `json:"nextPageToken,omitempty"`
}
