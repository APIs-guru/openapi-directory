package shared

type SuggestionClusterProtoCategoryEnum string

const (
	SuggestionClusterProtoCategoryEnumUnknownCategory SuggestionClusterProtoCategoryEnum = "unknownCategory"
	SuggestionClusterProtoCategoryEnumContentLabeling SuggestionClusterProtoCategoryEnum = "contentLabeling"
	SuggestionClusterProtoCategoryEnumTouchTargetSize SuggestionClusterProtoCategoryEnum = "touchTargetSize"
	SuggestionClusterProtoCategoryEnumLowContrast     SuggestionClusterProtoCategoryEnum = "lowContrast"
	SuggestionClusterProtoCategoryEnumImplementation  SuggestionClusterProtoCategoryEnum = "implementation"
)

type SuggestionClusterProto struct {
	Category    *SuggestionClusterProtoCategoryEnum `json:"category,omitempty"`
	Suggestions []SuggestionProto                   `json:"suggestions,omitempty"`
}
