package shared

type AddressAutocompleteHit struct {
	Suggestion *string                     `json:"suggestion"`
	Udprn      *string                     `json:"udprn"`
	Umprn      *string                     `json:"umprn"`
	Urls       *AddressAutocompleteHitUrls `json:"urls"`
}
