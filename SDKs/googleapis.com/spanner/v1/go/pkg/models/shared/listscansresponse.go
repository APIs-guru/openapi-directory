package shared

type ListScansResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Scans         []Scan  `json:"scans"`
}
