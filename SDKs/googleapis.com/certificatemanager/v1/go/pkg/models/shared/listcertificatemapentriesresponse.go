package shared

type ListCertificateMapEntriesResponse struct {
	CertificateMapEntries []CertificateMapEntry `json:"certificateMapEntries"`
	NextPageToken         *string               `json:"nextPageToken"`
	Unreachable           []string              `json:"unreachable"`
}
