package shared

type UpdateSectionStyleRequest struct {
	Fields       *string       `json:"fields"`
	Range        *Range        `json:"range"`
	SectionStyle *SectionStyle `json:"sectionStyle"`
}
