package shared

// Chain
// A chain is a brand that your business's locations can be affiliated with.
type Chain struct {
	ChainNames    []ChainName `json:"chainNames,omitempty"`
	LocationCount *int32      `json:"locationCount,omitempty"`
	Name          *string     `json:"name,omitempty"`
	Websites      []ChainURL  `json:"websites,omitempty"`
}
