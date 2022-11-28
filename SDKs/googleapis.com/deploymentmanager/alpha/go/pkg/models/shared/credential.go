package shared

// Credential
// The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
type Credential struct {
	BasicAuth         *BasicAuth      `json:"basicAuth,omitempty"`
	ServiceAccount    *ServiceAccount `json:"serviceAccount,omitempty"`
	UseProjectDefault *bool           `json:"useProjectDefault,omitempty"`
}
