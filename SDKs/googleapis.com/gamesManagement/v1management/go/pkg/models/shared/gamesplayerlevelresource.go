package shared

type GamesPlayerLevelResource struct {
	Level               *int32  `json:"level"`
	MaxExperiencePoints *string `json:"maxExperiencePoints"`
	MinExperiencePoints *string `json:"minExperiencePoints"`
}
