package shared

type AndroidInfo struct {
	AndroidFallbackLink          *string `json:"androidFallbackLink,omitempty"`
	AndroidLink                  *string `json:"androidLink,omitempty"`
	AndroidMinPackageVersionCode *string `json:"androidMinPackageVersionCode,omitempty"`
	AndroidPackageName           *string `json:"androidPackageName,omitempty"`
}
