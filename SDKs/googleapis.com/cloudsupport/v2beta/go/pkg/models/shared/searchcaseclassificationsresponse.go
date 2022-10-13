package shared

type SearchCaseClassificationsResponse struct {
	CaseClassifications []CaseClassification `json:"caseClassifications"`
	NextPageToken       *string              `json:"nextPageToken"`
}
