package shared

type EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum string

const (
	EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnumMetadataLabelMatchCriteriaUnspecified EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
	EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAny                              EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ANY"
	EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAll                              EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ALL"
)

type EndpointMatcherMetadataLabelMatcher struct {
	MetadataLabelMatchCriteria *EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum `json:"metadataLabelMatchCriteria,omitempty"`
	MetadataLabels             []EndpointMatcherMetadataLabelMatcherMetadataLabels                `json:"metadataLabels,omitempty"`
}
