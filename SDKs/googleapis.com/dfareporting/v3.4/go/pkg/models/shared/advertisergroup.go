package shared

// AdvertiserGroup
// Groups advertisers together so that reports can be generated for the entire group at once.
type AdvertiserGroup struct {
	AccountID *string `json:"accountId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
}
