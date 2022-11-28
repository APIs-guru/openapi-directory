package shared

// SectionBreak
// A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
type SectionBreak struct {
	SectionStyle          *SectionStyle `json:"sectionStyle,omitempty"`
	SuggestedDeletionIds  []string      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds []string      `json:"suggestedInsertionIds,omitempty"`
}
