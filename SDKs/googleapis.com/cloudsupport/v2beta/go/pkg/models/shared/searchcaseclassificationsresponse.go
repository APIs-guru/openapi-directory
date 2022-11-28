package shared

// SearchCaseClassificationsResponse
// The response message for SearchCaseClassifications endpoint.
type SearchCaseClassificationsResponse struct {
	CaseClassifications []CaseClassification `json:"caseClassifications,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
