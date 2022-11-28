package shared

// SasPortalSetPolicyRequest
// Request message for `SetPolicy` method.
type SasPortalSetPolicyRequest struct {
	DisableNotification *bool            `json:"disableNotification,omitempty"`
	Policy              *SasPortalPolicy `json:"policy,omitempty"`
	Resource            *string          `json:"resource,omitempty"`
}
