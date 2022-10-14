package shared

type Project struct {
	ID     *string `json:"id,omitempty"`
	Kind   *string `json:"kind,omitempty"`
	Number *string `json:"number,omitempty"`
	Quota  *Quota  `json:"quota,omitempty"`
}
