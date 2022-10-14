package shared

type GlobalSetPolicyRequest struct {
	Bindings []Binding `json:"bindings,omitempty"`
	Etag     *string   `json:"etag,omitempty"`
	Policy   *Policy   `json:"policy,omitempty"`
}
