package shared

// PrimaryAdmin
// JSON template for primary admin in case of TEAM customers
type PrimaryAdmin struct {
	PrimaryEmail *string `json:"primaryEmail,omitempty"`
}
