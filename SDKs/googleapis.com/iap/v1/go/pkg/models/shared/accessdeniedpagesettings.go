package shared

type AccessDeniedPageSettings struct {
	AccessDeniedPageURI               *string `json:"accessDeniedPageUri"`
	GenerateTroubleshootingURI        *bool   `json:"generateTroubleshootingUri"`
	RemediationTokenGenerationEnabled *bool   `json:"remediationTokenGenerationEnabled"`
}
