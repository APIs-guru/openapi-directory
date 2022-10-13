package shared

type Subactivity struct {
	Description               string          `json:"description"`
	QualificationSet          []Qualification `json:"qualification_set"`
	RegistriesSubactivityCode *string         `json:"registries_subactivity_code"`
}
