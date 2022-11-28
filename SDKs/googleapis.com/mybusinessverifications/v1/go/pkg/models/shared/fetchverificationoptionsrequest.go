package shared

// FetchVerificationOptionsRequest
// Request message for Verifications.FetchVerificationOptions.
type FetchVerificationOptionsRequest struct {
	Context      *ServiceBusinessContext `json:"context,omitempty"`
	LanguageCode *string                 `json:"languageCode,omitempty"`
}
