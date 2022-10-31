package shared

type GamesPlayerLevelResource struct {
	Level               *int32  `json:"level,omitempty"`
	MaxExperiencePoints *string `json:"maxExperiencePoints,omitempty"`
	MinExperiencePoints *string `json:"minExperiencePoints,omitempty"`
}
