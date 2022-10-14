package shared

type AddressAutocompleteHit struct {
	Suggestion *string                     `json:"suggestion,omitempty"`
	Udprn      *string                     `json:"udprn,omitempty"`
	Umprn      *string                     `json:"umprn,omitempty"`
	Urls       *AddressAutocompleteHitUrls `json:"urls,omitempty"`
}
