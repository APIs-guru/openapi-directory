package shared

type FetchVerificationOptionsRequest struct {
	Context      *ServiceBusinessContext `json:"context"`
	LanguageCode *string                 `json:"languageCode"`
}
