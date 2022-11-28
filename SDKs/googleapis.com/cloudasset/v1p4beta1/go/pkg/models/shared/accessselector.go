package shared

// AccessSelector
// Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10.
type AccessSelector struct {
	Permissions []string `json:"permissions,omitempty"`
	Roles       []string `json:"roles,omitempty"`
}
