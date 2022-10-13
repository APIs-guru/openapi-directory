package shared

type ListCertificatesResponse struct {
	Certificates  []Certificate `json:"certificates"`
	NextPageToken *string       `json:"nextPageToken"`
	Unreachable   []string      `json:"unreachable"`
}
