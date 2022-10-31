package shared



type SearchCaseClassificationsResponse struct {
    CaseClassifications []CaseClassification `json:"caseClassifications,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

