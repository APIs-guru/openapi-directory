package shared

type ListCertificateMapEntriesResponse struct {
	CertificateMapEntries []CertificateMapEntry `json:"certificateMapEntries,omitempty"`
	NextPageToken         *string               `json:"nextPageToken,omitempty"`
	Unreachable           []string              `json:"unreachable,omitempty"`
}
