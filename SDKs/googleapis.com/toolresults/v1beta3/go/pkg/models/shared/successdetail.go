package shared

// SuccessDetail
// Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
type SuccessDetail struct {
	OtherNativeCrash *bool `json:"otherNativeCrash,omitempty"`
}
