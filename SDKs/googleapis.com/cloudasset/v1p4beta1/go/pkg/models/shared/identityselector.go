package shared

// IdentitySelector
// Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.
type IdentitySelector struct {
	Identity *string `json:"identity,omitempty"`
}
