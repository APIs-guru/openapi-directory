package shared

// SearchChainsResponse
// Response message for Locations.SearchChains.
type SearchChainsResponse struct {
	Chains []Chain `json:"chains,omitempty"`
}
