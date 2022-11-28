package shared

// BusinessChainSearchTerms
// Search terms for Business Chain targeting options. At least one of the field should be populated.
type BusinessChainSearchTerms struct {
	BusinessChainQuery *string `json:"businessChainQuery,omitempty"`
	RegionQuery        *string `json:"regionQuery,omitempty"`
}
