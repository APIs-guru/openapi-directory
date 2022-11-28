package shared

// MasterProperties
// The properties of Page that are only relevant for pages with page_type MASTER.
type MasterProperties struct {
	DisplayName *string `json:"displayName,omitempty"`
}
