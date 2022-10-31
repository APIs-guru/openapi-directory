package shared



type PlayerLevel struct {
    Kind *string `json:"kind,omitempty"`
    Level *int32 `json:"level,omitempty"`
    MaxExperiencePoints *string `json:"maxExperiencePoints,omitempty"`
    MinExperiencePoints *string `json:"minExperiencePoints,omitempty"`
    
}

