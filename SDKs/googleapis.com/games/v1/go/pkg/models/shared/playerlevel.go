package shared

type PlayerLevel struct {
	Kind                *string `json:"kind"`
	Level               *int32  `json:"level"`
	MaxExperiencePoints *string `json:"maxExperiencePoints"`
	MinExperiencePoints *string `json:"minExperiencePoints"`
}
