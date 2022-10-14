package shared

type PublicSystemInfo struct {
	ID                     *string `json:"Id,omitempty"`
	LocalAddress           *string `json:"LocalAddress,omitempty"`
	OperatingSystem        *string `json:"OperatingSystem,omitempty"`
	ProductName            *string `json:"ProductName,omitempty"`
	ServerName             *string `json:"ServerName,omitempty"`
	StartupWizardCompleted *bool   `json:"StartupWizardCompleted,omitempty"`
	Version                *string `json:"Version,omitempty"`
}
