package shared

type MetadataLabelMatcherMetadataLabelMatchCriteriaEnum string

const (
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMetadataLabelMatchCriteriaUnspecified MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAny                              MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ANY"
	MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMatchAll                              MetadataLabelMatcherMetadataLabelMatchCriteriaEnum = "MATCH_ALL"
)

type MetadataLabelMatcher struct {
	MetadataLabelMatchCriteria *MetadataLabelMatcherMetadataLabelMatchCriteriaEnum `json:"metadataLabelMatchCriteria"`
	MetadataLabels             []MetadataLabels                                    `json:"metadataLabels"`
}
