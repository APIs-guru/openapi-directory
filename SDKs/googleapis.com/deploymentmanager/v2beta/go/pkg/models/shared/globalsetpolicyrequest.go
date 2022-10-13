package shared

type GlobalSetPolicyRequest struct {
	Bindings []Binding `json:"bindings"`
	Etag     *string   `json:"etag"`
	Policy   *Policy   `json:"policy"`
}
