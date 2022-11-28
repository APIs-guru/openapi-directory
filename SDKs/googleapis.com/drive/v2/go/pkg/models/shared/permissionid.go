package shared

// PermissionID
// An ID for a user or group as seen in Permission items.
type PermissionID struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
}
