package shared

type OsPolicyResourceExecResource struct {
	Enforce  *OsPolicyResourceExecResourceExec `json:"enforce,omitempty"`
	Validate *OsPolicyResourceExecResourceExec `json:"validate,omitempty"`
}
