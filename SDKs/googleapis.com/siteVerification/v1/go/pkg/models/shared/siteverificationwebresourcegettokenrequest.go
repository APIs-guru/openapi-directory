package shared

type SiteVerificationWebResourceGettokenRequestSite struct {
	Identifier *string `json:"identifier"`
	Type       *string `json:"type"`
}

type SiteVerificationWebResourceGettokenRequest struct {
	Site               *SiteVerificationWebResourceGettokenRequestSite `json:"site"`
	VerificationMethod *string                                         `json:"verificationMethod"`
}
