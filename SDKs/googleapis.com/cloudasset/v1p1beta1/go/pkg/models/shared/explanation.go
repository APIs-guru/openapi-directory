package shared

type Explanation struct {
	MatchedPermissions map[string]Permissions `json:"matchedPermissions,omitempty"`
}
