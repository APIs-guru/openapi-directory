package shared

type ApkManifest struct {
	ApplicationLabel *string        `json:"applicationLabel"`
	IntentFilters    []IntentFilter `json:"intentFilters"`
	MaxSdkVersion    *int32         `json:"maxSdkVersion"`
	MinSdkVersion    *int32         `json:"minSdkVersion"`
	PackageName      *string        `json:"packageName"`
	TargetSdkVersion *int32         `json:"targetSdkVersion"`
	UsesPermission   []string       `json:"usesPermission"`
	VersionCode      *string        `json:"versionCode"`
	VersionName      *string        `json:"versionName"`
}
