package shared



type AndroidAppAsset struct {
    Certificate *CertificateInfo `json:"certificate,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    
}

