package shared

type AndroidAppAsset struct {
	Certificate *CertificateInfo `json:"certificate"`
	PackageName *string          `json:"packageName"`
}
