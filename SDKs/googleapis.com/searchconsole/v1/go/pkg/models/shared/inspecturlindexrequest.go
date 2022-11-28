package shared

// InspectURLIndexRequest
// Index inspection request.
type InspectURLIndexRequest struct {
	InspectionURL *string `json:"inspectionUrl,omitempty"`
	LanguageCode  *string `json:"languageCode,omitempty"`
	SiteURL       *string `json:"siteUrl,omitempty"`
}
