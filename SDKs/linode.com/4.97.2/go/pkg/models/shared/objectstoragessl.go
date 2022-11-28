package shared

// ObjectStorageSsl
// Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
type ObjectStorageSsl struct {
	Certificate string `json:"certificate"`
	PrivateKey  string `json:"private_key"`
}
