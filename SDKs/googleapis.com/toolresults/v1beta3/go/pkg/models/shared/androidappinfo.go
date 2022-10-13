package shared

type AndroidAppInfo struct {
	Name        *string `json:"name"`
	PackageName *string `json:"packageName"`
	VersionCode *string `json:"versionCode"`
	VersionName *string `json:"versionName"`
}
