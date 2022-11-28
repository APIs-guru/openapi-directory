package shared

// ApkDetail
// Android application details based on application manifest and apk archive contents.
type ApkDetail struct {
	ApkManifest *ApkManifest `json:"apkManifest,omitempty"`
}
