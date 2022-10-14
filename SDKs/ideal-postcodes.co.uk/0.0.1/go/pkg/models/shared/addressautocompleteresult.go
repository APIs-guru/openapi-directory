package shared

type AddressAutocompleteResult struct {
	Hits []AddressAutocompleteHit `json:"hits,omitempty"`
}
