package shared

type AccessDeniedPageSettings struct {
	AccessDeniedPageURI               *string `json:"accessDeniedPageUri,omitempty"`
	GenerateTroubleshootingURI        *bool   `json:"generateTroubleshootingUri,omitempty"`
	RemediationTokenGenerationEnabled *bool   `json:"remediationTokenGenerationEnabled,omitempty"`
}
