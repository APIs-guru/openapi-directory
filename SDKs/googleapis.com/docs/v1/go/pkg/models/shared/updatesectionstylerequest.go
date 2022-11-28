package shared

// UpdateSectionStyleRequest
// Updates the SectionStyle.
type UpdateSectionStyleRequest struct {
	Fields       *string       `json:"fields,omitempty"`
	Range        *Range        `json:"range,omitempty"`
	SectionStyle *SectionStyle `json:"sectionStyle,omitempty"`
}
