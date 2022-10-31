package shared

type Queryjob struct {
	ID        *string        `json:"id,omitempty"`
	ResultURL *string        `json:"result-url,omitempty"`
	Stats     *QueryjobStats `json:"stats,omitempty"`
}
