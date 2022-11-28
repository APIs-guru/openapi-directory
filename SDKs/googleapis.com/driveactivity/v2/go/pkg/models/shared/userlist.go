package shared

// UserList
// Wrapper for UserList Field value.
type UserList struct {
	Values []SingleUser `json:"values,omitempty"`
}
