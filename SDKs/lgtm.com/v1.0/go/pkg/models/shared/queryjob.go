package shared

type Queryjob struct {
	ID        *string        `json:"id"`
	ResultURL *string        `json:"result-url"`
	Stats     *QueryjobStats `json:"stats"`
}
