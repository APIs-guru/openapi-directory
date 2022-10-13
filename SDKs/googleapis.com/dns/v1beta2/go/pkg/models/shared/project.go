package shared

type Project struct {
	ID     *string `json:"id"`
	Kind   *string `json:"kind"`
	Number *string `json:"number"`
	Quota  *Quota  `json:"quota"`
}
