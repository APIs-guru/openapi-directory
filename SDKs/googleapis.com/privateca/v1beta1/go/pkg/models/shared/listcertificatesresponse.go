package shared

type ListCertificatesResponse struct {
	Certificates  []Certificate `json:"certificates,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
}
