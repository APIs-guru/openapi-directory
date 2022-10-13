package shared

type Chain struct {
	ChainNames    []ChainName `json:"chainNames"`
	LocationCount *int32      `json:"locationCount"`
	Name          *string     `json:"name"`
	Websites      []ChainURI  `json:"websites"`
}
