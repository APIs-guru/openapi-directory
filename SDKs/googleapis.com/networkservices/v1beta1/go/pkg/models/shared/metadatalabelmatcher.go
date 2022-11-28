package shared

type MetadataLabelMatcherMetadataLabelMatchCriteriaEnum string

const (
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMetadataLabelMatchCriteriaUnspecified MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAny                              MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ANY"
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAll                              MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ALL"
)

// MetadataLabelMatcher
// The matcher that is based on node metadata presented by xDS clients.
type MetadataLabelMatcher struct {
	MetadataLabelMatchCriteria *MetadataLabelMatcherMetadataLabelMatchCriteriaEnum `json:"metadataLabelMatchCriteria,omitempty"`
	MetadataLabels             []MetadataLabels                                    `json:"metadataLabels,omitempty"`
}
