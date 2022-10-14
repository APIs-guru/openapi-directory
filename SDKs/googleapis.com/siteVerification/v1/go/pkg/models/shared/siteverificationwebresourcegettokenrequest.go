package shared

type SiteVerificationWebResourceGettokenRequestSite struct {
	Identifier *string `json:"identifier,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type SiteVerificationWebResourceGettokenRequest struct {
	Site               *SiteVerificationWebResourceGettokenRequestSite `json:"site,omitempty"`
	VerificationMethod *string                                         `json:"verificationMethod,omitempty"`
}
