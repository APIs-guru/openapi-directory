package shared

type Category struct {
	Category         *string `json:"category,omitempty"`
	ExperiencePoints *string `json:"experiencePoints,omitempty"`
	Kind             *string `json:"kind,omitempty"`
}
