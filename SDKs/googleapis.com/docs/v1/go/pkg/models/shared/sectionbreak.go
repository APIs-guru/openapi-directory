package shared

type SectionBreak struct {
	SectionStyle          *SectionStyle `json:"sectionStyle"`
	SuggestedDeletionIds  []string      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds []string      `json:"suggestedInsertionIds"`
}
