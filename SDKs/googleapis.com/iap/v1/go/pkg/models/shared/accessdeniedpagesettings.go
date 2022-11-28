package shared

// AccessDeniedPageSettings
// Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
type AccessDeniedPageSettings struct {
	AccessDeniedPageURI               *string `json:"accessDeniedPageUri,omitempty"`
	GenerateTroubleshootingURI        *bool   `json:"generateTroubleshootingUri,omitempty"`
	RemediationTokenGenerationEnabled *bool   `json:"remediationTokenGenerationEnabled,omitempty"`
}
