package shared

// AndroidAppAsset
// Describes an android app asset.
type AndroidAppAsset struct {
	Certificate *CertificateInfo `json:"certificate,omitempty"`
	PackageName *string          `json:"packageName,omitempty"`
}
