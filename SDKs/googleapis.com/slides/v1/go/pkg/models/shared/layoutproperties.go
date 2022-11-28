package shared

// LayoutProperties
// The properties of Page are only relevant for pages with page_type LAYOUT.
type LayoutProperties struct {
	DisplayName    *string `json:"displayName,omitempty"`
	MasterObjectID *string `json:"masterObjectId,omitempty"`
	Name           *string `json:"name,omitempty"`
}
