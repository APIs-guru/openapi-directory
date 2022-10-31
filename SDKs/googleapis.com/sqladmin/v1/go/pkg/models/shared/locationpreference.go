package shared



type LocationPreference struct {
    FollowGaeApplication *string `json:"followGaeApplication,omitempty"`
    Kind *string `json:"kind,omitempty"`
    SecondaryZone *string `json:"secondaryZone,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

