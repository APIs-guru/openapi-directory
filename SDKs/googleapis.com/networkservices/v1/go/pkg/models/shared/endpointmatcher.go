package shared

type EndpointMatcher struct {
	MetadataLabelMatcher *EndpointMatcherMetadataLabelMatcher `json:"metadataLabelMatcher"`
}
