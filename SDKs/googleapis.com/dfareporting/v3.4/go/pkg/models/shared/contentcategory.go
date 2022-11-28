package shared

// ContentCategory
// Organizes placements according to the contents of their associated webpages.
type ContentCategory struct {
	AccountID *string `json:"accountId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
}
