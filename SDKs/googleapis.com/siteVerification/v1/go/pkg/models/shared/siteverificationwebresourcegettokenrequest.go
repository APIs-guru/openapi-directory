package shared

// SiteVerificationWebResourceGettokenRequestSite
// The site for which a verification token will be generated.
type SiteVerificationWebResourceGettokenRequestSite struct {
	Identifier *string `json:"identifier,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type SiteVerificationWebResourceGettokenRequest struct {
	Site               *SiteVerificationWebResourceGettokenRequestSite `json:"site,omitempty"`
	VerificationMethod *string                                         `json:"verificationMethod,omitempty"`
}
