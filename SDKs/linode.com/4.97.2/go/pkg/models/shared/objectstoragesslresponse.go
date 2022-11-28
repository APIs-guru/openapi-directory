package shared

// ObjectStorageSslResponse
// If this Object Storage bucket has a corresponding TLS/SSL Certificate.
type ObjectStorageSslResponse struct {
	Ssl *bool `json:"ssl,omitempty"`
}
