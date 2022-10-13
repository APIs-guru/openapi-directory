package shared

type PublicSystemInfo struct {
	ID                     *string `json:"Id"`
	LocalAddress           *string `json:"LocalAddress"`
	OperatingSystem        *string `json:"OperatingSystem"`
	ProductName            *string `json:"ProductName"`
	ServerName             *string `json:"ServerName"`
	StartupWizardCompleted *bool   `json:"StartupWizardCompleted"`
	Version                *string `json:"Version"`
}
