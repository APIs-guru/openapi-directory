package shared

type Chain struct {
	ChainNames    []ChainName `json:"chainNames,omitempty"`
	LocationCount *int32      `json:"locationCount,omitempty"`
	Name          *string     `json:"name,omitempty"`
	Websites      []ChainURI  `json:"websites,omitempty"`
}
