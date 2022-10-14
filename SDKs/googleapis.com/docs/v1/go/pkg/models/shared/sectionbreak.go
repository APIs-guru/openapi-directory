package shared

type SectionBreak struct {
	SectionStyle          *SectionStyle `json:"sectionStyle,omitempty"`
	SuggestedDeletionIds  []string      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds []string      `json:"suggestedInsertionIds,omitempty"`
}
