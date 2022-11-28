package shared

// ACLEntry
// An entry for an Access Control list.
type ACLEntry struct {
	ExpirationTime *string `json:"expirationTime,omitempty"`
	Kind           *string `json:"kind,omitempty"`
	Name           *string `json:"name,omitempty"`
	Value          *string `json:"value,omitempty"`
}
