package shared

type SuggestionClusterProtoCategoryEnum string

const (
	SuggestionClusterProtoCategoryEnumUnknownCategory SuggestionClusterProtoCategoryEnum = "unknownCategory"
	SuggestionClusterProtoCategoryEnumContentLabeling SuggestionClusterProtoCategoryEnum = "contentLabeling"
	SuggestionClusterProtoCategoryEnumTouchTargetSize SuggestionClusterProtoCategoryEnum = "touchTargetSize"
	SuggestionClusterProtoCategoryEnumLowContrast     SuggestionClusterProtoCategoryEnum = "lowContrast"
	SuggestionClusterProtoCategoryEnumImplementation  SuggestionClusterProtoCategoryEnum = "implementation"
)

// SuggestionClusterProto
// A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
type SuggestionClusterProto struct {
	Category    *SuggestionClusterProtoCategoryEnum `json:"category,omitempty"`
	Suggestions []SuggestionProto                   `json:"suggestions,omitempty"`
}
