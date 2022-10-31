package shared

type Subactivity struct {
	Description               string          `json:"description"`
	QualificationSet          []Qualification `json:"qualification_set,omitempty"`
	RegistriesSubactivityCode *string         `json:"registries_subactivity_code,omitempty"`
}
