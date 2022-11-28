package shared

// SSHScript
// Response message for 'GenerateSshScript' request.
type SSHScript struct {
	Script *string `json:"script,omitempty"`
}
