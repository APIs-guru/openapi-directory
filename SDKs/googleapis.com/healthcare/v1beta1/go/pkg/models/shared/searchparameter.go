package shared

// SearchParameter
// Contains the versioned name and the URL for one SearchParameter.
type SearchParameter struct {
	CanonicalURL *string `json:"canonicalUrl,omitempty"`
	Parameter    *string `json:"parameter,omitempty"`
}
