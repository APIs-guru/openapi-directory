package shared

// EndpointMatcher
// A definition of a matcher that selects endpoints to which the policies should be applied.
type EndpointMatcher struct {
	MetadataLabelMatcher *EndpointMatcherMetadataLabelMatcher `json:"metadataLabelMatcher,omitempty"`
}
