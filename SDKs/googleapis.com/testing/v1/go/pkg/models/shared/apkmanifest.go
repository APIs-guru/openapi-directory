package shared

// ApkManifest
// An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
type ApkManifest struct {
	ApplicationLabel *string        `json:"applicationLabel,omitempty"`
	IntentFilters    []IntentFilter `json:"intentFilters,omitempty"`
	MaxSdkVersion    *int32         `json:"maxSdkVersion,omitempty"`
	Metadata         []Metadata     `json:"metadata,omitempty"`
	MinSdkVersion    *int32         `json:"minSdkVersion,omitempty"`
	PackageName      *string        `json:"packageName,omitempty"`
	TargetSdkVersion *int32         `json:"targetSdkVersion,omitempty"`
	UsesFeature      []UsesFeature  `json:"usesFeature,omitempty"`
	UsesPermission   []string       `json:"usesPermission,omitempty"`
	VersionCode      *string        `json:"versionCode,omitempty"`
	VersionName      *string        `json:"versionName,omitempty"`
}
