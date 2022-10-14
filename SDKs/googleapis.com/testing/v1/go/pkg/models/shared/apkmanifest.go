package shared

type ApkManifest struct {
	ApplicationLabel *string        `json:"applicationLabel,omitempty"`
	IntentFilters    []IntentFilter `json:"intentFilters,omitempty"`
	MaxSdkVersion    *int32         `json:"maxSdkVersion,omitempty"`
	MinSdkVersion    *int32         `json:"minSdkVersion,omitempty"`
	PackageName      *string        `json:"packageName,omitempty"`
	TargetSdkVersion *int32         `json:"targetSdkVersion,omitempty"`
	UsesPermission   []string       `json:"usesPermission,omitempty"`
	VersionCode      *string        `json:"versionCode,omitempty"`
	VersionName      *string        `json:"versionName,omitempty"`
}
