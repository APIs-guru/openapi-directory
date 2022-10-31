package shared



type ZoneTypeRestriction struct {
    Enable *bool `json:"enable,omitempty"`
    WhitelistedTypeID []string `json:"whitelistedTypeId,omitempty"`
    
}

