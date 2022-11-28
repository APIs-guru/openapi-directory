package shared

// LookupEffectiveGuestPolicyRequest
// A request message for getting the effective guest policy assigned to the instance.
type LookupEffectiveGuestPolicyRequest struct {
	OsArchitecture *string `json:"osArchitecture,omitempty"`
	OsShortName    *string `json:"osShortName,omitempty"`
	OsVersion      *string `json:"osVersion,omitempty"`
}
