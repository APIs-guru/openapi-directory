package shared

type InspectURLIndexRequest struct {
	InspectionURL *string `json:"inspectionUrl"`
	LanguageCode  *string `json:"languageCode"`
	SiteURL       *string `json:"siteUrl"`
}
