package shared

type AndroidInfo struct {
	AndroidFallbackLink          *string `json:"androidFallbackLink"`
	AndroidLink                  *string `json:"androidLink"`
	AndroidMinPackageVersionCode *string `json:"androidMinPackageVersionCode"`
	AndroidPackageName           *string `json:"androidPackageName"`
}
