package shared

// SavedColumn
// A saved column
type SavedColumn struct {
	Kind            *string `json:"kind,omitempty"`
	SavedColumnName *string `json:"savedColumnName,omitempty"`
	Type            *string `json:"type,omitempty"`
}
