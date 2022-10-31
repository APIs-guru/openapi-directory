package shared



type LookupEffectiveGuestPolicyRequest struct {
    OsArchitecture *string `json:"osArchitecture,omitempty"`
    OsShortName *string `json:"osShortName,omitempty"`
    OsVersion *string `json:"osVersion,omitempty"`
    
}

