package shared

type LookupEffectiveGuestPolicyRequest struct {
	OsArchitecture *string `json:"osArchitecture"`
	OsShortName    *string `json:"osShortName"`
	OsVersion      *string `json:"osVersion"`
}
