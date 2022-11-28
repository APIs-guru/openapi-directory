package shared

// ListCertificatesResponse
// Response for the `ListCertificates` method.
type ListCertificatesResponse struct {
	Certificates  []Certificate `json:"certificates,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
}
