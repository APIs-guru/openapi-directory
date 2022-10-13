package shared

type SasPortalSetPolicyRequest struct {
	DisableNotification *bool            `json:"disableNotification"`
	Policy              *SasPortalPolicy `json:"policy"`
	Resource            *string          `json:"resource"`
}
