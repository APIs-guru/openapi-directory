package shared

// GooglePrivacyDlpV2PathElement
// A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
type GooglePrivacyDlpV2PathElement struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
