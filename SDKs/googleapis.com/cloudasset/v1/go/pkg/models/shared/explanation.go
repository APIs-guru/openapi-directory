package shared

// Explanation
// Explanation about the IAM policy search result.
type Explanation struct {
	MatchedPermissions map[string]Permissions `json:"matchedPermissions,omitempty"`
}
