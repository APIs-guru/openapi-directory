package shared

// GetApkDetailsResponse
// Response containing the details of the specified Android application APK.
type GetApkDetailsResponse struct {
	ApkDetail *ApkDetail `json:"apkDetail,omitempty"`
}
