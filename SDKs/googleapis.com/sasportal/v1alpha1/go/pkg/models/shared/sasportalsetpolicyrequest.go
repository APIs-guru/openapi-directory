package shared

type SasPortalSetPolicyRequest struct {
	DisableNotification *bool            `json:"disableNotification,omitempty"`
	Policy              *SasPortalPolicy `json:"policy,omitempty"`
	Resource            *string          `json:"resource,omitempty"`
}
